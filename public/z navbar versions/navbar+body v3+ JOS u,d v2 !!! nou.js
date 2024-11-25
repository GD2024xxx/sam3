const style = document.createElement('style');
style.textContent = `
    /* Stil general pentru pagina */
    body {
        background: linear-gradient(135deg, #212121, #3a3a3a);
        color: #f1f1f1;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        overflow-x: hidden;
        transition: all 0.3s ease;
    }

    /* Navbar cu stil creativ */
    #navbar, #navbar-bottom {
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 60px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5); /* Umbre mai adânci */
        position: fixed;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        transition: top 0.4s ease, bottom 0.4s ease, transform 0.4s ease;
    }

    #navbar {
        top: 0;
    }

    #navbar-bottom {
        bottom: 0;
    }

    .nav-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .nav-buttons button {
        background-color: #222;
        color: #f1f1f1;
        padding: 14px 24px;
        margin: 0 15px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
    }

    .nav-buttons button:hover {
        background-color: #ff4081; /* Culoare roz vibrant pentru hover */
        box-shadow: 0 12px 30px rgba(255, 64, 129, 0.7);
        transform: translateY(-5px); /* Efect de ridicare */
    }

    .nav-buttons button.active {
        background-color: #00e5ff; /* Albastru electric pentru butonul activ */
        box-shadow: 0 8px 25px rgba(0, 229, 255, 0.7);
        transform: scale(1.1); /* Mărire puternică */
    }

    /* Butonul de logout cu efecturi */
    #logout-btn {
        background-color: #333;
        color: white;
        border: none;
        border-radius: 25px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
        font-weight: bold;
        letter-spacing: 1px;
    }

    #logout-btn:hover {
        background-color: #ff4081;
        transform: scale(1.05);
    }

    /* Animări pentru navbar */
    #navbar, #navbar-bottom {
        opacity: 1;
        transition: opacity 0.4s ease-in-out;
    }

    #navbar.hidden, #navbar-bottom.hidden {
        opacity: 0;
        pointer-events: none;
    }

    /* Efect de umbre la navbar */
    #navbar, #navbar-bottom {
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
    }

    /* Fundal texturat și animații subtile */
    .navbar-background {
        background: radial-gradient(circle, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1));
        padding: 20px;
        border-radius: 20px;
    }

    /* Tranziție dinamică la schimbarea fundalului paginii */
    body {
        transition: background 0.5s ease;
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
            <button onclick="navigateTo('cauta', 'top')">🔍 Cauta</button>
            <button onclick="navigateTo('add', 'top')">➕ Add</button>
            <button onclick="navigateTo('addVerzui', 'top')">Add Verzui</button>
            <button onclick="navigateTo('all_texts', 'top')">Texts</button>
            <button onclick="navigateTo('settings', 'top')">Settings</button>
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

    // Apel pentru a face butonul activ (albastru)
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
