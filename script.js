    const elements = {
    rightPanel: document.querySelector('.right-panel'),
    toggleSearchBtn: document.getElementById('toggle-search-btn'),
    searchPanel: document.getElementById('search-panel'),
    search: document.getElementById('search'),
    itemList: document.getElementById('item-list'),
    recuadrosContainer: document.getElementById('recuadros-container'),
    papelera: document.getElementById('papelera'),
    compatSection: document.getElementById('compat-section'),
    compatList: document.getElementById('compat-list'),
    currentTrickSpan: document.getElementById('current-trick'),
    deleteConnectionBtn: document.getElementById('delete-connection'),
    connectionsSvg: document.getElementById('connections-svg'),
    deleteMessage: document.getElementById('delete-message'),
    charCounter: document.getElementById('char-counter'),
    conexionMenu: document.getElementById('conexion-menu'),
    conexionText: document.getElementById('conexion-text'),
    deleteConexionBtn: document.getElementById('delete-conexion-btn'),
    saveConexionBtn: document.getElementById('save-conexion-btn'),
    toggleTransicionBtn: document.getElementById('toggle-transicion-btn'),
    conexionActions: document.getElementById('conexion-actions'),
    infoModal: document.getElementById('info-modal'),
    trickInfo: document.getElementById('info-text'),
    infoVideo: document.getElementById('info-video'),
    closeInfoBtn: document.getElementById('close-info-btn'),
    infoTrickBtn: document.getElementById('info-trick-btn'),
    helpBtn: document.getElementById('help-btn'),
    helpModal: document.getElementById('help-modal'),
    closeHelpBtn: document.getElementById('close-help-btn'),
    helpOverlay: document.getElementById('help-overlay'),
    externalLinkBtn: document.getElementById('external-link-btn')
};

const tricksByCategory = {
    'tricks': ['360', '540', 'geinger', 'frisbee', 'muscle-up', 'giant swing', 'laizans', 'shrimp flip', 'barspin', '180'],
    'super tricks': ['frontflip', '720', '900', 'oa frontflip', 'delchev', 'menendes', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?', '1080', '1260'],
    'flyaways': ['back', 'front', 'front full', 'double back', 'back full', 'back double full'],
    'power moves': ['planche', 'front lever', 'back lever', 'hefesto']
};
        
const originalItems = ['muscle-up', 'planche', 'front lever', 'back lever', 'hefesto', 'barspin', '360', '180', '540', 'laizans', 'back', 'shrimp flip', 'giant swing', 'frontflip', 'oa frontflip', 'delchev', 'geinger', 'frisbee', 'front', 'front full', 'double back', 'back double full', '720', '900', '1080', '1260', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?'];
        
    const compatibilities = {
    'muscle-up': ['barspin', 'planche', 'hefesto', '360', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', 'menendes', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    '180': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', 'menendes', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    '360': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    '540': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    '720': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    '900': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    '1080': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    '1260': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'barspin': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'laizans': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'shrimp flip': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'giant swing': ['front lever', 'back lever', 'planche', 'laizans', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'menendes': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'oa frontflip': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'frontflip': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'delchev': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'frisbee': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'geinger': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'front lever': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'back lever': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'planche': ['front lever', 'back lever', 'hefesto', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'hefesto': ['front lever', 'back lever', 'muscle-up', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'king 360': ['front lever', 'back lever', 'laizans', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'king 540': ['front lever', 'back lever', 'laizans', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'king 720': ['front lever', 'back lever', 'laizans', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'king 900': ['front lever', 'back lever', 'laizans', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'king 1260?': ['front lever', 'back lever', 'laizans', '180', '360', 'shrimp flip', '540', 'geinger', 'frisbee', 'giant swing', 'delchev', 'frontflip', 'oa frontflip', '720', '900', '1080', '1260', 'king 360', 'king 540', 'king 720', 'king 900', 'king 1260?', 'back', 'back full', 'front', 'front full', 'double back', 'back double full'],
    'double back': [],
    'back double full': [],
    'back': [],
    'back full': [],
    'front': [],
    'front full': [],
};

const trickInfo = {
    'muscle-up': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    '180': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    '360': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    '540': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    '720': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    '900': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    '1080': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    '1260': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'barspin': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },    
    'laizans': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'shrimp flip': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'giant swing': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'menendes': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'oa frontflip': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'frontflip': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'delchev': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'frisbee': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'geinger': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'front lever': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'back lever': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'planche': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'hefesto': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'double back': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'back': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'back full': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'back double full': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'front': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'front full': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'king 360': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'king 540': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'king 720': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'king 900': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    'king 1260?': { text: 'zone under construction: we need volunteers for the example videos, contact us :)', video: 'https://www.w3schools.com/html/mov_bbb.mp4' }
};
// ========== ESTADO DE LA APLICACIÓN ==========
const allConnections = {};
const activeConnections = {};
const trickCounts = {};
const colorMap = {};

let currentConexion = { fromId: null, toId: null, pathElement: null, key: null };
let currentRecuadro = null;
let recuadroId = 0;
let isDragging = false;
let draggedElement = null;
let offsetX, offsetY;
let highlightedIndex = -1;
let isSearchListVisible = false;
let isNavigatingWithArrows = false;

// DISABLE RIGHT CLICK
document. addEventListener ("contextmenu", function(e) {
e.preventDefault();
}, false);
// DISABLE SHORTCUT KEYS
document.addEventListener ("keydown", function (e) {
if (e.ctrlkey || e.keyCode==123) {
e. stopPropagation();
e. preventDefault();
}
});

// ========== DETECCIÓN TÁCTIL ==========
const isTouchDevice = 'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 || 
    navigator.msMaxTouchPoints > 0;

// ========== FUNCIONES DE UTILIDAD ==========
function getConexionKey(fromId, toId) {
    return `${fromId}-${toId}`;
}

function getBaseTrickName(trickText) {
    return trickText.replace(/\s*\(\d+\)$/, '');
}

function isDarkColor(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) < 128;
}

// ====== SAFE AREA (para que los recuadros no queden debajo del botón/panel de search) ======
function getSafeArea() {
    // Base: evita que los recuadros queden bajo los botones superiores
    let safeTop = 80;

    const isNarrow = window.matchMedia('(max-width: 900px)').matches;

    // En escritorio, cuando el buscador está abierto, reservamos el lateral izquierdo
    const safeLeft = (!isNarrow && elements.rightPanel && elements.rightPanel.classList.contains('search-open')) ? 360 : 0;

    // En móvil: si hay paneles abiertos arriba, reservamos su altura para que no salgan recuadros por debajo
    if (isNarrow && elements.recuadrosContainer) {
        const containerRect = elements.recuadrosContainer.getBoundingClientRect();
        const margin = 15;

        const panels = [elements.searchPanel, elements.compatSection].filter(Boolean);
        panels.forEach(panel => {
            const isVisible = panel.style.display === 'flex' || panel.classList.contains('mostrar');
            if (!isVisible) return;

            const rect = panel.getBoundingClientRect();
            const bottomRelativeToContainer = rect.bottom - containerRect.top;
            safeTop = Math.max(safeTop, bottomRelativeToContainer + margin);
        });
    }

    return { safeTop, safeLeft };
}

function enforceSafeArea() {
    const { safeTop, safeLeft } = getSafeArea();
    const recuadros = elements.recuadrosContainer.querySelectorAll('.recuadro');

    recuadros.forEach(el => {
        const left = parseFloat(el.style.left) || 0;
        const top = parseFloat(el.style.top) || 0;

        if (left < safeLeft) el.style.left = safeLeft + 'px';
        if (top < safeTop) el.style.top = safeTop + 'px';
    });

    updateConnections();
}

// ========== FUNCIONES DE ANIMACIÓN ==========
function mostrarElemento(elemento) {
    elemento.style.display = elemento === elements.itemList ? 'block' : 'flex';
    requestAnimationFrame(() => {
        elemento.classList.add('mostrar');
    });
    if (elemento === elements.itemList) {
        isSearchListVisible = true;
    }
}

function ocultarElemento(elemento) {
    if (elemento.classList.contains('mostrar')) {
        elemento.classList.remove('mostrar');
        setTimeout(() => {
            elemento.style.display = 'none';
        }, 300);
    }
    if (elemento === elements.itemList) {
        isSearchListVisible = false;
    }
}

function showSearchPanel(focusSearch = true) {
    if (elements.rightPanel) elements.rightPanel.classList.add('search-open');

    elements.searchPanel.style.display = 'flex';
    requestAnimationFrame(() => {
        elements.searchPanel.classList.add('mostrar');
    });
    mostrarElemento(elements.itemList);

    // En móvil: al abrir desde el botón, NO abrimos teclado; el teclado solo al tocar el input
    if (focusSearch) {
        elements.search.focus();
    } else {
        elements.search.blur();
    }

    // Empujar recuadros fuera del área reservada (para que no queden debajo)
    enforceSafeArea();
}

function hideSearchPanel() {
    if (elements.rightPanel) elements.rightPanel.classList.remove('search-open');

    if (elements.searchPanel.classList.contains('mostrar')) {
        elements.searchPanel.classList.remove('mostrar');
        setTimeout(() => {
            elements.searchPanel.style.display = 'none';
        }, 300);
    } else {
        elements.searchPanel.style.display = 'none';
    }
    ocultarElemento(elements.itemList);
    elements.search.blur();
    animarTransicionListas();

    // Reaplicar límites (en móvil/resize puede cambiar el safeLeft)
    enforceSafeArea();
}

function toggleSearchPanel() {
    const visible = elements.searchPanel.style.display === 'flex' || elements.searchPanel.classList.contains('mostrar');
    if (visible) hideSearchPanel();
    else showSearchPanel();
}

function animarTransicionListas() {
    // Ya no usamos el espaciador del panel izquierdo; evitar errores si no existe
    if (!elements.espaciadorLista) return;

    if (isSearchListVisible && elements.compatSection.style.display === 'flex') {
        elements.espaciadorLista.style.height = '10px';
    } else if (isSearchListVisible) {
        elements.espaciadorLista.style.height = '0px';
    } else if (elements.compatSection.style.display === 'flex') {
        elements.espaciadorLista.style.height = '0px';
    }
}

// ========== FUNCIONES DE INTERFAZ ==========
function crearListaConGrupos() {
    elements.itemList.innerHTML = '';
    const ordenCategorias = ['tricks', 'super tricks', 'power moves', 'flyaways'];
    
    ordenCategorias.forEach(categoria => {
        const tricks = tricksByCategory[categoria];
        if (!tricks || tricks.length === 0) return;
        
        const header = document.createElement('li');
        header.textContent = categoria;
        header.className = 'categoria-header';
        elements.itemList.appendChild(header);
        
        tricks.forEach(trick => {
            const li = document.createElement('li');
            li.textContent = trick;
            li.dataset.categoria = categoria;
            li.dataset.baseName = trick;
            
            li.addEventListener('click', () => {
                addRecuadro(trick);
                elements.search.value = '';
                updateList();
                elements.search.blur();
            });
            li.addEventListener('mouseenter', () => {
                if (!li.classList.contains('highlighted')) {
                    li.style.backgroundColor = '#f0f0f0';
                }
            });
            li.addEventListener('mouseleave', () => {
                if (!li.classList.contains('highlighted')) {
                    li.style.backgroundColor = '';
                }
            });
            
            elements.itemList.appendChild(li);
        });
    });
}

function updateList(query = '') {
    query = query.toLowerCase().trim();
    const allListItems = Array.from(elements.itemList.getElementsByTagName('li'));
    
    if (!query) {
        allListItems.forEach(li => li.classList.remove('hidden'));
        updateHighlights();
        return;
    }
    
    allListItems.forEach(li => li.classList.add('hidden'));
    
    allListItems.forEach((li, index) => {
        if (li.classList.contains('categoria-header')) return;
        
        const itemText = li.textContent.toLowerCase();
        const itemBaseName = li.dataset.baseName ? li.dataset.baseName.toLowerCase() : itemText;
        
        if (itemText.includes(query) || itemBaseName.includes(query)) {
            li.classList.remove('hidden');
            
            for (let i = index - 1; i >= 0; i--) {
                if (allListItems[i].classList.contains('categoria-header')) {
                    allListItems[i].classList.remove('hidden');
                    break;
                }
            }
        }
    });
    
    const itemsVisibles = allListItems.filter(li => !li.classList.contains('hidden') && !li.classList.contains('categoria-header'));
    if (itemsVisibles.length > 0) {
        highlightedIndex = -1;
        updateHighlights();
    } else {
        highlightedIndex = -1;
    }
}

function updateHighlights() {
    const allListItems = Array.from(elements.itemList.getElementsByTagName('li'));
    allListItems.forEach(li => li.classList.remove('highlighted'));
    
    if (highlightedIndex >= 0 && highlightedIndex < allListItems.length) {
        allListItems[highlightedIndex].classList.add('highlighted');
        allListItems[highlightedIndex].scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        });
    }
}

// ========== FUNCIONES DE RECUADROS ==========
function addRecuadro(text) {
    if (!trickCounts[text]) trickCounts[text] = 0;
    if (trickCounts[text] >= 10) {
        alert(`No puedes añadir más de 10 instancias de "${text}".`);
        return;
    }
    
    trickCounts[text]++;
    const recuadro = document.createElement('div');
    recuadro.className = 'recuadro';
    
    const currentId = recuadroId;
    recuadro.id = 'recuadro-' + currentId;
    recuadroId++;
    
    if (!activeConnections[recuadro.id]) {
        activeConnections[recuadro.id] = [];
    }
    
    recuadro.textContent = trickCounts[text] > 1 ? `${text} (${trickCounts[text]})` : text;
    
    // Asignar color
    const allowedColors = ['#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999', '#AAAAAA', '#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE', '#F0F0F0', '#F2F2F2', '#F4F4F4', '#F6F6F6', '#F8F8F8'];
    const shuffledColors = [...allowedColors].sort(() => Math.random() - 0.5);
    originalItems.forEach((item, index) => {
        colorMap[item] = shuffledColors[index % shuffledColors.length];
    });
    
    const bgColor = colorMap[text] || '#CCCCCC';
    recuadro.style.backgroundColor = bgColor;
    recuadro.style.color = isDarkColor(bgColor) ? 'white' : 'black';
    
    // Posicionar
    positionRecuadro(recuadro);
    
    elements.recuadrosContainer.appendChild(recuadro);
    
    // Animar entrada
    setTimeout(() => {
        recuadro.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        recuadro.style.opacity = '1';
        recuadro.style.transform = 'scale(1)';
    }, 10);
    
    setupRecuadroEvents(recuadro);
    updateSelectedCompatibles();
}

function positionRecuadro(recuadro) {
    recuadro.style.position = 'absolute';
    recuadro.style.opacity = '0';
    recuadro.style.transform = 'scale(0.8)';

    const { safeTop, safeLeft } = getSafeArea();

    const existingRecuadros = Array.from(elements.recuadrosContainer.querySelectorAll('.recuadro'));
    const padding = 20, margin = 15;

    if (existingRecuadros.length === 0) {
        recuadro.style.left = (safeLeft + padding) + 'px';
        recuadro.style.top = (safeTop + padding) + 'px';
        return;
    }

    let maxRight = safeLeft + padding, currentRowBottom = safeTop + padding, currentRowHeight = 0;
    
    existingRecuadros.forEach(existing => {
        const rect = existing.getBoundingClientRect();
        const relativeLeft = parseFloat(existing.style.left);
        const relativeTop = parseFloat(existing.style.top);
        const relativeRight = relativeLeft + rect.width;
        const relativeBottom = relativeTop + rect.height;
        
        if (relativeBottom > currentRowBottom) {
            currentRowBottom = relativeBottom;
            maxRight = padding;
        }
        
        if (relativeRight > maxRight) {
            maxRight = relativeRight;
            currentRowHeight = Math.max(currentRowHeight, rect.height);
        }
    });
    
    const containerRect = elements.recuadrosContainer.getBoundingClientRect();
    let newLeft, newTop;
    
    if (maxRight + recuadro.offsetWidth + margin <= containerRect.width - padding) {
        newLeft = maxRight + margin;
        newTop = currentRowBottom - currentRowHeight;
    } else {
        newLeft = padding;
        newTop = currentRowBottom + margin;
    }
    
    if (newTop + recuadro.offsetHeight > containerRect.height - padding) {
        newTop = padding;
    }

    // Aplicar safe-area final (usa safeTop/safeLeft calculados arriba)
    newLeft = Math.max(safeLeft, newLeft);
    newTop = Math.max(safeTop, newTop);

    recuadro.style.left = newLeft + 'px';
    recuadro.style.top = newTop + 'px';
}

function setupRecuadroEvents(recuadro) {
    recuadro.addEventListener('mousedown', function(e) {
        if (e.button === 2) return;
        isDragging = true;
        draggedElement = e.target;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        e.preventDefault();
    });
    
    recuadro.addEventListener('click', function(e) {
        if (e.button === 0) {
            e.preventDefault();
            currentRecuadro = e.target;
            showCompatibles(getBaseTrickName(currentRecuadro.textContent));
        }
    });
    // === PANTALLA TÁCTIL ===
    let touchStartX, touchStartY, touchStartTime;
    let isTap = false;
    
    recuadro.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            touchStartTime = Date.now();
            isTap = true;
            
            // Para arrastrar en móvil
            isDragging = true;
            draggedElement = recuadro;
            const rect = recuadro.getBoundingClientRect();
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
            
            e.preventDefault();
        }
    }, { passive: false });
    
    recuadro.addEventListener('touchmove', function(e) {
        if (e.touches.length === 1 && isDragging) {
            const touch = e.touches[0];
            const moveX = Math.abs(touch.clientX - touchStartX);
            const moveY = Math.abs(touch.clientY - touchStartY);
            
            // Si se movió más de 10px, no es un tap
            if (moveX > 10 || moveY > 10) {
                isTap = false;
                
                // Mover el recuadro
                const containerRect = elements.recuadrosContainer.getBoundingClientRect();
                let newLeft = touch.clientX - containerRect.left - offsetX;
                let newTop = touch.clientY - containerRect.top - offsetY;
                
                const safeArea = getSafeArea();

                newLeft = Math.max(safeArea.safeLeft, Math.min(newLeft, containerRect.width - recuadro.offsetWidth));
                newTop = Math.max(safeArea.safeTop, Math.min(newTop, containerRect.height - recuadro.offsetHeight));

                recuadro.style.left = newLeft + 'px';
                recuadro.style.top = newTop + 'px';

                setTrashDragOver(isElementOverTrash(recuadro));
                updateConnections();
            }
            
            e.preventDefault();
        }
    }, { passive: false });
    
    recuadro.addEventListener('touchend', function(e) {
        if (isTap && Date.now() - touchStartTime < 300) {
            // Es un tap (click táctil)
            e.preventDefault();
            currentRecuadro = recuadro;
            showCompatibles(getBaseTrickName(currentRecuadro.textContent));
        }
        
        isDragging = false;
        draggedElement = null;
        isTap = false;

        setTrashDragOver(false);
    }, { passive: false });
    
    // Prevenir el menú contextual en táctil largo
    recuadro.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
}

function deleteRecuadro(recuadro) {
    const text = getBaseTrickName(recuadro.textContent);
    if (trickCounts[text]) {
        trickCounts[text]--;
        if (trickCounts[text] === 0) delete trickCounts[text];
    }
    
    const recuadroId = recuadro.id;
    
    delete activeConnections[recuadroId];
    Object.keys(allConnections).forEach(key => {
        if (key.includes(recuadroId)) delete allConnections[key];
    });
    
    if (currentRecuadro && currentRecuadro.id === recuadroId) {
        hideCompatibles();
        currentRecuadro = null;
        elements.infoTrickBtn.style.display = 'none';
    }
    
    if (currentConexion.fromId === recuadroId || currentConexion.toId === recuadroId) {
        hideConexionMenu();
    }
    
    recuadro.remove();
    updateConnections();
    updateSelectedCompatibles();
}

// ========== FUNCIONES DE COMPATIBILIDAD ==========
function showCompatibles(baseText) {
    elements.compatList.innerHTML = '';
    elements.currentTrickSpan.textContent = 'Combine ' + (currentRecuadro ? currentRecuadro.textContent : baseText);

    const hasInfo = trickInfo[baseText] || false;
    elements.infoTrickBtn.style.display = hasInfo ? 'inline' : 'none';

    const compatibles = compatibilities[baseText] || [];
    const allRecuadros = Array.from(elements.recuadrosContainer.children)
    .filter(el => el.classList.contains('recuadro') && 
                     currentRecuadro && 
                     el.id !== currentRecuadro.id);

    const recuadrosPorNombre = {};
    allRecuadros.forEach(recuadro => {
    const recuadroBaseText = getBaseTrickName(recuadro.textContent);
        if (!recuadrosPorNombre[recuadroBaseText]) {
            recuadrosPorNombre[recuadroBaseText] = [];
        }
        recuadrosPorNombre[recuadroBaseText].push({
           id: recuadro.id,
           text: recuadro.textContent,
           trickName: recuadroBaseText
        });
    });

    // Obtener las conexiones actuales del truco seleccionado
    const currentConnections = activeConnections[currentRecuadro.id] || [];
    
    compatibles.forEach(trickName => {
        if (recuadrosPorNombre[trickName]) {
        recuadrosPorNombre[trickName].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.text;
            li.dataset.recId = item.id; // <-- AGREGAR ESTA LÍNEA
    
            // VERIFICAR SI ESTÁ CONECTADO
            const isConnected = currentConnections.includes(item.id);
    
            if (isConnected) {
                li.classList.add('opaca');
                li.title = "Already connected";
            } 
            else {
                li.title = "Click to connect";
            }
               // === AÑADIR EVENTOS TÁCTILES ===
                li.addEventListener('touchstart', function(e) {
                    e.stopPropagation();
                    this.style.backgroundColor = '#f0f0f0';
                }, { passive: true });
    
                li.addEventListener('touchend', function(e) {
                    e.stopPropagation();
                    this.style.backgroundColor = '';
        
                    if (!this.classList.contains('opaca')) {
                        selectCompatible(item.id, item.trickName);
                    }
                }, { passive: true });
    
                li.addEventListener('touchcancel', function() {
                   this.style.backgroundColor = '';
                }, { passive: true });

                li.addEventListener('click', () => {

                // Solo permitir click si no está opaco
                if (!li.classList.contains('opaca')) {
                    selectCompatible(item.id, item.trickName);
                }
            });
                
                // Efectos hover solo para elementos no opacos
                if (!isConnected) {
                    li.addEventListener('mouseenter', () => {
                        li.style.backgroundColor = '#f0f0f0';
                        li.style.transform = 'translateX(5px)';
                    });
                    li.addEventListener('mouseleave', () => {
                        li.style.backgroundColor = '';
                        li.style.transform = '';
                    });
                }
                
                li.style.opacity = '0';
                li.style.transform = 'translateX(-10px)';
                elements.compatList.appendChild(li);
                
                setTimeout(() => {
                    li.style.transition = 'opacity 0.3s ease, transform 0.3s ease, background-color 0.2s ease';
                    li.style.opacity = isConnected ? '0.5' : '1';
                    li.style.transform = 'translateX(0)';
                }, 10);
            });
        }
    });
    
    if (elements.compatList.children.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'no possible combinations';
        li.classList.add('no-compatibles-message');
        elements.compatList.appendChild(li);
    }
    
    animarTransicionListas();
    
    setTimeout(() => {
        elements.compatSection.style.display = 'flex';
        requestAnimationFrame(() => {
            elements.compatSection.classList.add('mostrar');
        });

        // En móvil, reservar altura del panel para que no aparezcan recuadros “debajo”
        enforceSafeArea();
    }, 10);
    
    const hasConnections = currentConnections.length > 0;
    elements.deleteConnectionBtn.style.display = hasConnections ? 'inline' : 'none';
}

function hideCompatibles() {
    if (elements.compatSection.classList.contains('mostrar')) {
        elements.compatSection.classList.remove('mostrar');
        setTimeout(() => {
            elements.compatSection.style.display = 'none';
            animarTransicionListas();

            // Reaplicar límites cuando desaparece el panel
            enforceSafeArea();
        }, 300);
    }
}

function selectCompatible(targetId, trickName) {
    if (!currentRecuadro) return;
    
    const recuadroId = currentRecuadro.id;
    
    if (!activeConnections[recuadroId]) {
        activeConnections[recuadroId] = [];
    }
    
    // Verificar si ya está conectado
    if (activeConnections[recuadroId].includes(targetId)) {
        return;
    }
    
    // Agregar conexión
    activeConnections[recuadroId].push(targetId);
    const connectionKey = getConexionKey(recuadroId, targetId);
    allConnections[connectionKey] = { type: 'normal', notes: '', displayText: '' };
    
    // Actualizar visualización
    updateConnections();
    
    // Marcar SOLO el elemento específico usando data-rec-id
    const listItems = Array.from(elements.compatList.children);
    listItems.forEach(li => {
        if (li.dataset.recId === targetId) {
            li.classList.add('opaca');
            li.title = "Already connected";
            li.style.opacity = '0.5';
            
            // Deshabilitar clicks futuros
            li.onclick = null;
            li.style.pointerEvents = 'none';
            
            console.log(`Elemento con ID ${targetId} marcado como conectado`);
        }
    });
    
    // Actualizar botón
    elements.deleteConnectionBtn.style.display = activeConnections[recuadroId].length > 0 ? 'inline' : 'none';
}

function updateSelectedCompatibles() {
    if (currentRecuadro) {
        showCompatibles(getBaseTrickName(currentRecuadro.textContent));
    }
}

// ========== FUNCIONES DE CONEXIONES ==========
function updateConnections() {
    elements.connectionsSvg.innerHTML = '';
    document.querySelectorAll('.transicion-label').forEach(label => label.remove());
    
    for (const [fromId, connections] of Object.entries(activeConnections)) {
        const fromEl = document.getElementById(fromId);
        if (!fromEl) continue;
        
        connections.forEach(targetId => {
            const toEl = document.getElementById(targetId);
            if (toEl) drawConnection(fromEl, toEl, targetId);
        });
    }
}

function drawConnection(fromEl, toEl, targetId) {
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();
    const containerRect = elements.recuadrosContainer.getBoundingClientRect();
    
    const x1 = fromRect.right - containerRect.left;
    const y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
    const x2 = toRect.left - containerRect.left;
    const y2 = toRect.top + toRect.height / 2 - containerRect.top;
    
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const startX = x1 + 3, startY = y1, endX = x2 - 3, endY = y2;
    const radius = 15, goesRight = x2 > x1;
    
    let path = '', labelX, labelY;
    
    if (dx > 50 && dy > 50) {
        const middleX = startX + (goesRight ? dx/2 : -dx/2);
        labelX = middleX;
        labelY = (startY + endY) / 2;
        
        if (goesRight) {
            path = y2 > y1 ? 
                `M ${startX} ${startY} L ${middleX - radius} ${startY} Q ${middleX} ${startY} ${middleX} ${startY + radius} L ${middleX} ${endY - radius} Q ${middleX} ${endY} ${middleX + radius} ${endY} L ${endX} ${endY}` :
                `M ${startX} ${startY} L ${middleX - radius} ${startY} Q ${middleX} ${startY} ${middleX} ${startY - radius} L ${middleX} ${endY + radius} Q ${middleX} ${endY} ${middleX + radius} ${endY} L ${endX} ${endY}`;
        } else {
            path = y2 > y1 ?
                `M ${startX} ${startY} L ${middleX + radius} ${startY} Q ${middleX} ${startY} ${middleX} ${startY + radius} L ${middleX} ${endY - radius} Q ${middleX} ${endY} ${middleX - radius} ${endY} L ${endX} ${endY}` :
                `M ${startX} ${startY} L ${middleX + radius} ${startY} Q ${middleX} ${startY} ${middleX} ${startY - radius} L ${middleX} ${endY + radius} Q ${middleX} ${endY} ${middleX - radius} ${endY} L ${endX} ${endY}`;
        }
    } else {
        labelX = (startX + endX) / 2;
        labelY = (startY + endY) / 2;
        path = `M ${startX} ${startY} L ${endX} ${endY}`;
    }
    
    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', path);
    
    const connectionKey = getConexionKey(fromEl.id, targetId);
    const connectionInfo = allConnections[connectionKey] || { type: 'normal', displayText: '' };
    
    if (connectionInfo.type === 'transicion') {
        pathEl.setAttribute('stroke', 'orange');
        pathEl.setAttribute('stroke-dasharray', '5,5');
        pathEl.classList.add('connection-path', 'transicion');
        
        if (connectionInfo.displayText && connectionInfo.displayText.trim() !== '') {
            const lineLength = Math.sqrt(dx * dx + dy * dy);
            if (lineLength > 100) {
                const label = document.createElement('div');
                label.className = 'transicion-label';
                const labelText = connectionInfo.displayText.length > 10 ? 
                    connectionInfo.displayText.substring(0, 10) + '...' : connectionInfo.displayText;
                label.textContent = labelText;
                label.title = connectionInfo.notes || connectionInfo.displayText;
                label.style.left = `${labelX - 30}px`;
                label.style.top = `${labelY - 15}px`;
                
                label.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const rect = label.getBoundingClientRect();
                    const clickX = rect.left + rect.width / 2;
                    const clickY = rect.top + rect.height / 2;
                    showConexionMenu(fromEl.id, targetId, pathEl, clickX, clickY);
                });
                
                elements.recuadrosContainer.appendChild(label);
            }
        }
    } else {
        pathEl.setAttribute('stroke', 'red');
        pathEl.classList.add('connection-path', 'normal');
    }
    
    pathEl.addEventListener('click', function(e) {
        e.stopPropagation();
        showConexionMenu(fromEl.id, targetId, pathEl, e.clientX, e.clientY);
    });
    
    elements.connectionsSvg.appendChild(pathEl);
}

function deleteConexion(fromId, toId) {
    if (activeConnections[fromId]) {
        activeConnections[fromId] = activeConnections[fromId].filter(id => id !== toId);
        if (activeConnections[fromId].length === 0) delete activeConnections[fromId];
        
        const connectionKey = getConexionKey(fromId, toId);
        delete allConnections[connectionKey];
        
        updateConnections();
        if (currentRecuadro && currentRecuadro.id === fromId) {
            showCompatibles(getBaseTrickName(currentRecuadro.textContent));
        }
    }
}

// ========== FUNCIONES DEL MENÚ DE CONEXIÓN ==========
function showConexionMenu(fromId, toId, pathElement, clickX, clickY) {
    currentConexion = { fromId, toId, pathElement, key: getConexionKey(fromId, toId) };
    
    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    if (!fromEl || !toEl) return;
    
    const connectionInfo = allConnections[currentConexion.key] || { type: 'normal', notes: '', displayText: '' };
    elements.conexionMenu.classList.remove('compacto', 'completo');
    
    if (connectionInfo.type === 'transicion') {
        elements.toggleTransicionBtn.classList.add('active');
        elements.conexionText.style.display = 'block';
        elements.charCounter.style.display = 'block';
        elements.conexionActions.style.display = 'flex';
        elements.conexionMenu.classList.add('completo');
    } else {
        elements.toggleTransicionBtn.classList.remove('active');
        elements.conexionText.style.display = 'none';
        elements.charCounter.style.display = 'none';
        elements.conexionActions.style.display = 'none';
        elements.conexionMenu.classList.add('compacto');
    }
    
    elements.conexionText.value = connectionInfo.notes || '';
    updateCharCounter();
    
    const menuWidth = 300;
    const menuHeight = elements.conexionMenu.offsetHeight;
    const containerRect = elements.recuadrosContainer.getBoundingClientRect();
    
    let menuX = clickX - containerRect.left;
    let menuY = clickY - containerRect.top;
    
    if (menuX + menuWidth > containerRect.width) menuX = containerRect.width - menuWidth - 10;
    if (menuY + menuHeight > containerRect.height) menuY = containerRect.height - menuHeight - 10;
    if (menuX < 10) menuX = 10;
    if (menuY < 10) menuY = 10;
    
    elements.conexionMenu.style.left = menuX + 'px';
    elements.conexionMenu.style.top = menuY + 'px';
    elements.conexionMenu.style.display = 'flex';
    
    requestAnimationFrame(() => {
        elements.conexionMenu.classList.add('mostrar');
    });
    
    if (connectionInfo.type === 'transicion') {
        setTimeout(() => elements.conexionText.focus(), 10);
    }
}

function hideConexionMenu() {
    elements.conexionMenu.style.display = 'none';
    elements.conexionMenu.classList.remove('compacto', 'completo', 'mostrar');
    currentConexion = { fromId: null, toId: null, pathElement: null, key: null };
}

function toggleTransicion() {
    if (!currentConexion.key) return;
    
    const connectionInfo = allConnections[currentConexion.key] || { type: 'normal', notes: '', displayText: '' };
    connectionInfo.type = connectionInfo.type === 'normal' ? 'transicion' : 'normal';
    
    elements.toggleTransicionBtn.classList.toggle('active', connectionInfo.type === 'transicion');
    elements.conexionText.style.display = connectionInfo.type === 'transicion' ? 'block' : 'none';
    elements.charCounter.style.display = connectionInfo.type === 'transicion' ? 'block' : 'none';
    elements.conexionActions.style.display = connectionInfo.type === 'transicion' ? 'flex' : 'none';
    elements.conexionMenu.classList.toggle('compacto', connectionInfo.type === 'normal');
    elements.conexionMenu.classList.toggle('completo', connectionInfo.type === 'transicion');
    
    allConnections[currentConexion.key] = connectionInfo;
    updateConnections();
    
    if (connectionInfo.type === 'transicion') {
        setTimeout(() => elements.conexionText.focus(), 10);
    }
}

function saveConexionNotes() {
    if (!currentConexion.key) return;
    
    const connectionInfo = allConnections[currentConexion.key] || { type: 'normal', notes: '', displayText: '' };
    
    if (connectionInfo.type === 'transicion') {
        connectionInfo.notes = elements.conexionText.value.trim();
        const displayText = elements.conexionText.value.trim();
        connectionInfo.displayText = displayText.length > 20 ? displayText.substring(0, 20) : displayText;
    } else {
        connectionInfo.notes = '';
        connectionInfo.displayText = '';
    }
    
    allConnections[currentConexion.key] = connectionInfo;
    updateConnections();
    hideConexionMenu();
}

function updateCharCounter() {
    const text = elements.conexionText.value;
    const displayText = text.length > 20 ? text.substring(0, 20) : text;
    elements.charCounter.textContent = `${displayText.length}/20`;
    elements.charCounter.classList.toggle('warning', displayText.length >= 20);
}

// ========== FUNCIONES DE INFORMACIÓN ==========
function showTrickInfo() {
    if (!currentRecuadro) return;
    
    const baseText = getBaseTrickName(currentRecuadro.textContent);
    const info = trickInfo[baseText];
    if (!info) return;
    
    elements.trickInfo.textContent = info.text;
    elements.infoVideo.parentElement.classList.add('cargando');
    elements.infoVideo.src = info.video;
    
    elements.infoVideo.addEventListener('loadeddata', () => {
        elements.infoVideo.parentElement.classList.remove('cargando');
    }, { once: true });
    
    elements.infoModal.style.display = 'flex';
    requestAnimationFrame(() => {
        elements.infoModal.classList.add('mostrar');
    });
    
    setTimeout(() => {
        document.addEventListener('click', closeOnClickOutside);
    }, 10);
}

function closeOnClickOutside(event) {
    if (!elements.infoModal.contains(event.target) && event.target !== elements.infoTrickBtn) {
        hideTrickInfo();
    }
}

function hideTrickInfo() {
    if (elements.infoModal.classList.contains('mostrar')) {
        elements.infoModal.classList.remove('mostrar');
        setTimeout(() => {
            elements.infoModal.style.display = 'none';
            elements.infoVideo.pause();
            elements.infoVideo.src = '';
            document.removeEventListener('click', closeOnClickOutside);
        }, 300);
    }
}

// ========== FUNCIONES DE AYUDA ==========
function showHelpModal() {
    hideTrickInfo();
    hideConexionMenu();
    
    elements.helpOverlay.style.display = 'block';
    setTimeout(() => {
        elements.helpOverlay.classList.add('mostrar');
    }, 10);
    
    elements.helpModal.style.display = 'flex';
    requestAnimationFrame(() => {
        elements.helpModal.classList.add('mostrar');
    });
}

function hideHelpModal() {
    elements.helpOverlay.classList.remove('mostrar');
    setTimeout(() => {
        elements.helpOverlay.style.display = 'none';
    }, 300);
    
    elements.helpModal.classList.remove('mostrar');
    setTimeout(() => {
        elements.helpModal.style.display = 'none';
    }, 300);
}

// ========== INICIALIZACIÓN ==========
function init() {
    // MENSAJE DE INFORMATIVO
    console.log('%cWelcome to TrickMap!', 'color: #257F69; font-size: 18px; font-weight: bold;');
    console.log('%cQuick info:', 'color: #333; font-weight: bold;');
    console.log('We recomend the use in desktop, not optimised at the moment for touch screen');
    crearListaConGrupos();
    updateList();
    elements.infoTrickBtn.style.display = 'none';
    
    // Toggle del buscador (ahora es un botón)
    // En móvil: al pulsar el botón solo mostramos el panel/lista, sin abrir teclado.
    elements.toggleSearchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const visible = elements.searchPanel.style.display === 'flex' || elements.searchPanel.classList.contains('mostrar');
        if (visible) hideSearchPanel();
        else showSearchPanel(false);
    });

    // Soporte táctil (en algunos móviles el click no dispara como esperas)
    elements.toggleSearchBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const visible = elements.searchPanel.style.display === 'flex' || elements.searchPanel.classList.contains('mostrar');
        if (visible) hideSearchPanel();
        else showSearchPanel(false);
    }, { passive: false });

    // Si el input recibe foco (móvil/tab), aseguramos que el panel esté abierto
    elements.search.addEventListener('focus', () => {
        if (elements.searchPanel.style.display !== 'flex') {
            showSearchPanel();
        }
        mostrarElemento(elements.itemList);
        animarTransicionListas();
    });

    elements.search.addEventListener('input', () => {
        updateList(elements.search.value);
        highlightedIndex = -1;
        updateHighlights();
    });
    
    elements.search.addEventListener('keydown', handleSearchKeys);
    
    // Cerrar buscador/lista al hacer click fuera
    document.addEventListener('click', (e) => {
        const clickedRecuadro = !!e.target.closest('.recuadro');
        const clickedCompat = !!e.target.closest('.compat-section');

        if (!elements.searchPanel.contains(e.target) &&
            !elements.toggleSearchBtn.contains(e.target) &&
            !clickedRecuadro &&
            !clickedCompat &&
            !elements.helpBtn.contains(e.target)) {
            hideSearchPanel();
        }

        // Cerrar compatibles al hacer click fuera (pero no si haces click en un recuadro)
        if (!clickedCompat && !clickedRecuadro && elements.compatSection.style.display === 'flex') {
            hideCompatibles();
        }
    });

    elements.itemList.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Event listeners del contenedor
    elements.recuadrosContainer.addEventListener('click', (e) => {
        if (!e.target.closest('.conexion-menu') && 
            !e.target.classList.contains('connection-path') &&
            !e.target.classList.contains('transicion-label')) {
            hideConexionMenu();
        }
    });
    
    // Event listeners de la papelera
    elements.papelera.addEventListener('click', clearAll);
    elements.papelera.addEventListener('dragenter', () => elements.deleteMessage.style.display = 'block');
    elements.papelera.addEventListener('dragleave', () => elements.deleteMessage.style.display = 'none');
    // Event listeners de la papelera (EXISTENTES - MANTENER)
    elements.papelera.addEventListener('click', clearAll);
    elements.papelera.addEventListener('dragenter', () => elements.deleteMessage.style.display = 'block');
    elements.papelera.addEventListener('dragleave', () => elements.deleteMessage.style.display = 'none');

    // === AÑADIR EVENTOS TÁCTILES PARA PAPELERA ===
    elements.papelera.addEventListener('touchstart', function() {
    elements.deleteMessage.style.display = 'block';
    this.style.transform = 'scale(1.1)';
    }, { passive: true });

    elements.papelera.addEventListener('touchend', function() {
    elements.deleteMessage.style.display = 'none';
    this.style.transform = 'scale(1)';
    }, { passive: true });
    
    // Event listeners del mouse
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Event listeners de botones
    elements.deleteConnectionBtn.addEventListener('click', deleteCurrentConnections);
    elements.deleteConexionBtn.addEventListener('click', deleteCurrentConexion);
    elements.toggleTransicionBtn.addEventListener('click', toggleTransicion);
    elements.saveConexionBtn.addEventListener('click', saveConexionNotes);
    elements.conexionText.addEventListener('input', updateCharCounter);
    elements.conexionText.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') saveConexionNotes();
    });
    
    // Event listeners de información
    elements.infoTrickBtn.addEventListener('click', showTrickInfo);
    elements.closeInfoBtn.addEventListener('click', hideTrickInfo);
    elements.infoModal.addEventListener('click', (e) => {
        if (e.target === elements.infoModal) hideTrickInfo();
    });
    
    // Event listeners de ayuda
    elements.helpBtn.addEventListener('click', showHelpModal);
    elements.closeHelpBtn.addEventListener('click', hideHelpModal);
    elements.helpOverlay.addEventListener('click', hideHelpModal);
    elements.helpModal.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Event listener global de teclado
    document.addEventListener('keydown', handleGlobalKeydown);
    
    // MODAL DE BIENVENIDA - COMENTAR PARA DESACTIVAR
    function initWelcomeModal() {
        const welcomeModal = document.getElementById('welcome-modal');
        const closeWelcomeBtn = document.getElementById('close-welcome-btn');

        // Si no existe el modal en el HTML, no hacemos nada (evita que se rompa init())
        if (!welcomeModal || !closeWelcomeBtn) return;

        // Mostrar inmediatamente
        welcomeModal.style.display = 'flex';

        // Cerrar al hacer click en el botón
        closeWelcomeBtn.addEventListener('click', () => {
            welcomeModal.style.display = 'none';
        });

        // Cerrar al hacer click fuera del contenido
        welcomeModal.addEventListener('click', (e) => {
            if (e.target === welcomeModal) {
                welcomeModal.style.display = 'none';
            }
        });

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && welcomeModal.style.display === 'flex') {
                welcomeModal.style.display = 'none';
            }
        });
    }

    // LLAMAR ESTA FUNCIÓN - COMENTAR PARA DESACTIVAR EL MODAL
    initWelcomeModal();
}
                // === AÑADIR EVENTOS TÁCTILES GLOBALES ===
                if (isTouchDevice) {
                    // Prevenir zoom con doble tap
                    document.addEventListener('touchstart', function(e) {
                       if (e.touches.length > 1) {
                            e.preventDefault();
                        }
                    }, { passive: false });
        
                    // Prevenir scroll cuando se está arrastrando
                    document.addEventListener('touchmove', function(e) {
                        if (isDragging) {
                            e.preventDefault();
                        }
                    }, { passive: false });
        
                    // Mejorar el buscador para táctil
                    // (dejamos el comportamiento nativo: al tocar el input se activa y abre teclado)
                // === AÑADIR CLASE CSS SEGÚN DISPOSITIVO ===
                    if (isTouchDevice) {
                        document.documentElement.classList.add('touch-device');
                        console.log('Modo táctil activado');
                    } else {
                        document.documentElement.classList.add('non-touch-device');
                    }
                }
    


// ========== MANEJO DE EVENTOS ==========
function handleSearchKeys(e) {
    const visibleItems = Array.from(elements.itemList.getElementsByTagName('li'))
        .filter(li => !li.classList.contains('hidden') && !li.classList.contains('categoria-header'));
    
    if (visibleItems.length === 0) return;
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        if (highlightedIndex === -1) {
            highlightedIndex = visibleItems[0].dataset.originalIndex || 0;
        } else {
            const direction = e.key === 'ArrowDown' ? 1 : -1;
            const currentVisibleIndex = visibleItems.findIndex(item => 
                Array.from(elements.itemList.children).indexOf(item) === highlightedIndex
            );
            
            if (currentVisibleIndex !== -1) {
                let nextVisibleIndex = (currentVisibleIndex + direction + visibleItems.length) % visibleItems.length;
                highlightedIndex = Array.from(elements.itemList.children).indexOf(visibleItems[nextVisibleIndex]);
            } else {
                highlightedIndex = Array.from(elements.itemList.children).indexOf(visibleItems[0]);
            }
        }
        
        updateHighlights();
        isNavigatingWithArrows = true;
        
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < elements.itemList.children.length) {
            const selectedItem = elements.itemList.children[highlightedIndex];
            if (!selectedItem.classList.contains('categoria-header')) {
                addRecuadro(selectedItem.textContent);
                elements.search.value = '';
                updateList();
                elements.search.blur();
            }
        }
    }
}

function setTrashDragOver(isOver) {
    if (!elements.papelera) return;

    elements.papelera.classList.toggle('drag-over', isOver);
    elements.deleteMessage.style.display = isOver ? 'block' : 'none';
}

function isElementOverTrash(el) {
    if (!el || !elements.papelera) return false;

    const papeleraRect = elements.papelera.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    return (
        elRect.right > papeleraRect.left &&
        elRect.left < papeleraRect.right &&
        elRect.bottom > papeleraRect.top &&
        elRect.top < papeleraRect.bottom
    );
}

function handleMouseMove(e) {
    if (!isDragging || !draggedElement) return;

    const { safeTop, safeLeft } = getSafeArea();

    const containerRect = elements.recuadrosContainer.getBoundingClientRect();
    let newLeft = e.clientX - containerRect.left - offsetX;
    let newTop = e.clientY - containerRect.top - offsetY;

    newLeft = Math.max(safeLeft, Math.min(newLeft, containerRect.width - draggedElement.offsetWidth));
    newTop = Math.max(safeTop, Math.min(newTop, containerRect.height - draggedElement.offsetHeight));

    draggedElement.style.left = newLeft + 'px';
    draggedElement.style.top = newTop + 'px';

    setTrashDragOver(isElementOverTrash(draggedElement));
    updateConnections();
}

function handleMouseUp() {
    if (!isDragging || !draggedElement) return;

    isDragging = false;

    const isOverTrash = isElementOverTrash(draggedElement);
    if (isOverTrash) deleteRecuadro(draggedElement);

    draggedElement = null;
    setTrashDragOver(false);
}

function clearAll() {
    const recuadros = elements.recuadrosContainer.querySelectorAll('.recuadro');
    recuadros.forEach(recuadro => recuadro.remove());
    
    elements.connectionsSvg.innerHTML = '';
    document.querySelectorAll('.transicion-label').forEach(label => label.remove());
    
    // Reiniciar variables
    recuadroId = 0;
    Object.keys(trickCounts).forEach(key => delete trickCounts[key]);
    Object.keys(activeConnections).forEach(key => delete activeConnections[key]);
    Object.keys(allConnections).forEach(key => delete allConnections[key]);
    Object.keys(colorMap).forEach(key => delete colorMap[key]);
    
    currentRecuadro = null;
    currentConexion = { fromId: null, toId: null, pathElement: null, key: null };
    draggedElement = null;
    isDragging = false;
    
    hideCompatibles();
    hideConexionMenu();
    hideTrickInfo();
    ocultarElemento(elements.itemList);
    elements.search.blur();
    elements.search.value = '';
    updateList();
    elements.infoTrickBtn.style.display = 'none';
    elements.deleteMessage.style.display = 'none';
    
    setTimeout(() => {
        updateConnections();
        updateSelectedCompatibles();
        animarTransicionListas();
    }, 50);
}

function deleteCurrentConnections() {
    if (currentRecuadro) {
        const connectionsToDelete = activeConnections[currentRecuadro.id] || [];
        connectionsToDelete.forEach(targetId => {
            delete allConnections[getConexionKey(currentRecuadro.id, targetId)];
        });
        delete activeConnections[currentRecuadro.id];
        updateConnections();
        elements.deleteConnectionBtn.style.display = 'none';
        showCompatibles(getBaseTrickName(currentRecuadro.textContent));
    }
}

function deleteCurrentConexion() {
    if (currentConexion.fromId && currentConexion.toId) {
        deleteConexion(currentConexion.fromId, currentConexion.toId);
        hideConexionMenu();
    }
}

function handleGlobalKeydown(e) {
    if (e.key === 'Escape') {
        if (elements.helpModal.style.display === 'flex') {
            hideHelpModal();
        } else if (elements.infoModal.style.display === 'flex') {
            hideTrickInfo();
        } else if (elements.searchPanel && (elements.searchPanel.style.display === 'flex' || isSearchListVisible)) {
            hideSearchPanel();
        } else if (elements.conexionMenu.style.display === 'flex') {
            hideConexionMenu();
        }
    }
}
function scrollToContent() {
  const contentSection = document.getElementById('content');
  if (contentSection) {
    contentSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Debug: mostrar errores JS en consola
window.addEventListener('error', (e) => {
  console.error('JS error:', e.error || e.message);
});

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  try {
    init();
  } catch (err) {
    console.error('Init failed:', err);
  }
});
