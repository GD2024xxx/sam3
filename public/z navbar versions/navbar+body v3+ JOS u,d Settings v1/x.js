const style = document.createElement('style');
style.textContent = `
    /* Stilul general pentru pagină */
    body {
        background-color: #212121;  /* Fundal închis */
        color: #e0e0e0;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        overflow-x: hidden;
        transition: background-color 0.3s ease;
    }

    /* Navbar cu fundal #212121 */
    #navbar, #navbar-bottom {
        background: #212121;  /* Fundal gri închis pentru navbar */
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }

    #navbar-bottom {
        bottom: 0;
        top: auto;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    }

    /* Stil butoane cu fundal #3a3a3a */
    .nav-buttons {
        display: flex;
        align-items: center;
        gap: 12px;  /* Spațiu între butoane */
    }

    .nav-buttons button {
        background-color: #3a3a3a;  /* Fundal butoane #3a3a3a */
        color: #e0e0e0;
        border: 2px solid transparent;
        padding: 8px 16px;  /* Reducere padding */
        border-radius: 25px;  /* Colțuri mai rotunjite */
        cursor: pointer;
        font-size: 12px;  /* Reducere dimensiune font */
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .nav-buttons button:hover {
        background-color: #4b9cd3;  /* Albastru deschis la hover */
        color: #fff;
        border-color: #4b9cd3;
        transform: scale(1.05);
    }

    .nav-buttons button.active {
        background-color: #2ecc71;  /* Verde subtil pentru butonul activ */
        color: white;
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(46, 204, 113, 0.3);
    }

    /* Buton logout cu efecte simple */
    #logout-btn {
        background-color: #fff;  /* Butonul de logout opac */
        color: #e74c3c;
        border: 2px solid #e74c3c;
        padding: 6px 12px;  /* Reducere padding */
        font-size: 13px;  /* Reducere dimensiune font */
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 1px;
        transition: all 0.3s ease;
    }

    #logout-btn:hover {
        background-color: #e74c3c;
        color: white;
        transform: scale(1.05);
    }

    /* Efecte de umbră pentru navbar */
    .navbar-background {
        background: rgba(255, 255, 255, 0.85);
        padding: 15px;
        border-radius: 15px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    /* Tranziție pentru navbar */
    #navbar, #navbar-bottom {
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    #navbar.hidden, #navbar-bottom.hidden {
        opacity: 0;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Eliminare margini pentru body
document.body.style.margin = "0";

// Conținutul navbar-urilor
const navbarTop = `
    <div id="navbar">
        <div class="nav-buttons">
            <button onclick="navigateTo('home', 'top')">Home</button>
            <button onclick="navigateTo('cauta', 'top')">🔍 Căutare</button>
            <button onclick="navigateTo('add', 'top')">➕ Adaugă</button>
            <button onclick="navigateTo('addVerzui', 'top')">Add verzui</button>
            <button onclick="navigateTo('all_texts', 'top')">All texts</button>
            <button onclick="navigateTo('settings', 'top')">Setări</button>
        </div>
        <button id="logout-btn" onclick="logout()">LogOut</button>
    </div>
`;

const navbarBottom = `
    <div id="navbar-bottom">
        <div class="nav-buttons">
            <button onclick="navigateTo('privacy', 'bottom')">Privacy</button>
            <button onclick="navigateTo('terms', 'bottom')">Terms</button>
            <button onclick="navigateTo('contact', 'bottom')">Contact</button>
        </div>
    </div>
`;

// Inserare navbar-uri
document.body.insertAdjacentHTML('afterbegin', navbarTop);
document.body.insertAdjacentHTML('beforeend', navbarBottom);

// Funcționalitățile navbar-urilor
function logout() {
    window.location.href = 'login.html';
}

function navigateTo(page, navbar) {
    const pages = {
        home: 'index.html',
        cauta: 'Cauta (Search - Open - Edit).html',
        add: 'add.html',
        addVerzui: 'add_verzui.html',
        all_texts: 'all_texts.html',
        settings: 'settings.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
        contact: 'contact.html'
    };
    window.location.href = pages[page] || 'index.html';

    // Apel pentru a face butonul activ
    highlightButton(page, navbar);
}

// Setează butonul activ
function highlightButton(page, navbar) {
    const navbarElement = navbar === 'top' ? document.getElementById('navbar') : document.getElementById('navbar-bottom');
    const buttons = navbarElement.querySelectorAll('button');

    // Elimină clasa 'active' de la toate butoanele
    buttons.forEach(button => button.classList.remove('active'));

    // Adaugă clasa 'active' butonului apăsat
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(page.toLowerCase())) {
            button.classList.add('active');
        }
    });
}

// Ascunde navbar-ul de sus când se apasă "u"
function toggleNavbarTop(event) {
    if (event.key === 'u') {
        const navbarTopElement = document.getElementById('navbar');
        navbarTopElement.classList.toggle('hidden');
    }
}

// Ascunde navbar-ul de jos când se apasă "d"
function toggleNavbarBottom(event) {
    if (event.key === 'd') {
        const navbarBottomElement = document.getElementById('navbar-bottom');
        navbarBottomElement.classList.toggle('hidden');
    }
}

// Ascultători de evenimente pentru tastatura
document.addEventListener('keydown', toggleNavbarTop);
document.addEventListener('keydown', toggleNavbarBottom);
