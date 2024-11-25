const style = document.createElement('style');
style.textContent = `
    body {
        background-color: #212121;
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

    #navbar, #navbar-bottom {
        background: #212121;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: opacity 0.3s ease;
    }

    #navbar {
        top: 0;
    }

    #navbar-bottom {
        bottom: 0;
        top: auto;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    }

    .nav-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .nav-buttons button {
        background-color: #3a3a3a;
        color: #e0e0e0;
        border: 2px solid transparent;
        padding: 6px 10px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .nav-buttons button:hover {
        background-color: #4b9cd3;
        color: #fff;
    }

    .nav-buttons button.active {
        background-color: #2ecc71;
        color: white;
    }

    #logout-btn {
        position: absolute;
        right: 20px;
        background-color: #fff;
        color: #e74c3c;
        border: 2px solid #e74c3c;
        padding: 6px 9px;
        font-size: 12px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    #logout-btn:hover {
        background-color: #e74c3c;
        color: white;
    }

    #navbar.hidden, #navbar-bottom.hidden {
        opacity: 0;
        pointer-events: none;
    }
`;
document.head.appendChild(style);

const navbarTop = `
    <div id="navbar">
        <div class="nav-buttons">
            <button onclick="navigateTo('home', 'top')">🏠 Home</button>
            <button onclick="navigateTo('cauta', 'top')">🔍 Căutare</button>
            <button onclick="navigateTo('add', 'top')">➕ Adaugă</button>
            <button onclick="navigateTo('settings', 'top')">⚙️ Setări</button>
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

document.body.insertAdjacentHTML('afterbegin', navbarTop);
document.body.insertAdjacentHTML('beforeend', navbarBottom);

function logout() {
    window.location.href = 'login.html';
}

function navigateTo(page, navbar) {
    const pages = {
        home: 'index.html',
        cauta: 'Cauta (Search - Open - Edit).html',
        add: 'add.html',
        settings: 'settings.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
        contact: 'contact.html'
    };
    window.location.href = pages[page] || 'index.html';
}

// Funcționalitățile pentru ascunderea navbar-urilor

function toggleNavbarTop(event) {
    // Verifică dacă tasta 'u' (mică sau mare) este apăsată și Shift este activat
    if (event.key.toLowerCase() === 'u' && event.shiftKey) {
        const navbarTopElement = document.getElementById('navbar');
        navbarTopElement.classList.toggle('hidden');
    }
}



function toggleNavbarBottom(event) {
    // Verifică dacă tasta 'd' (mic sau mare) este apăsat și Shift este activat
    if (event.key.toLowerCase() === 'd' && event.shiftKey) {
        const navbarBottomElement = document.getElementById('navbar-bottom');
        navbarBottomElement.classList.toggle('hidden');
    }
}



document.addEventListener('keydown', toggleNavbarTop);
document.addEventListener('keydown', toggleNavbarBottom);
