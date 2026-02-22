create table if not exists public.trick_stats (
    trick text primary key,
    searches integer not null default 0 check (searches >= 0),
    uses integer not null default 0 check (uses >= 0),
    updated_at timestamptz not null default now()
);

alter table public.trick_stats enable row level security;

drop policy if exists "read trick stats" on public.trick_stats;
create policy "read trick stats"
on public.trick_stats
for select
using (true);

revoke insert, update, delete on public.trick_stats from anon, authenticated;
grant select on public.trick_stats to anon, authenticated;

create or replace function public.increment_trick_stats(
    p_trick text,
    p_searches_inc integer default 0,
    p_uses_inc integer default 0
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
    if p_trick is null or length(trim(p_trick)) = 0 then
        return;
    end if;

    insert into public.trick_stats (trick, searches, uses)
    values (
        trim(p_trick),
        greatest(coalesce(p_searches_inc, 0), 0),
        greatest(coalesce(p_uses_inc, 0), 0)
    )
    on conflict (trick) do update set
        searches = public.trick_stats.searches + greatest(coalesce(excluded.searches, 0), 0),
        uses = public.trick_stats.uses + greatest(coalesce(excluded.uses, 0), 0),
        updated_at = now();
end;
$$;

grant execute on function public.increment_trick_stats(text, integer, integer) to anon, authenticated;
