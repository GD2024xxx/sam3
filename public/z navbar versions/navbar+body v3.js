const style = document.createElement('style');
style.textContent = `
    /* Stil general pentru pagina */
    body {
        background-color: #2b2b2b;
        color: #e0e0e0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        padding-top: 56px; /* Spațiu sub navbar */
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

    /* Stil pentru navbar */
    #navbar {
        background-color: #1f1f1f;
        width: 100%;
        height: 56px; /* Înălțimea navbar-ului */
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    .nav-buttons button {
        background-color: #3a3a3a;
        color: #e0e0e0;
        padding: 8px 15px;
        margin: 0 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
    }

    .nav-buttons button:hover {
        background-color: #4b4b4b;
    }

    #logout-btn {
        background-color: #1f1f1f;
        color: white;
        border: none;
        border-radius: 25px;
        padding: 2px 6px;
        font-size: 14px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-right: 15px;
    }

    #logout-btn:hover {
        background-color: #d9534f;
    }
`;
document.head.appendChild(style);

// Eliminare margini pentru body
document.body.style.margin = "0";

// Conținutul navbar-ului
const navbar = `
    <div id="navbar">
        <div class="nav-buttons">
            <button onclick="navigateTo('home')">Home</button>
            <button onclick="navigateTo('cauta')">🔆 Cauta</button>
            <button onclick="navigateTo('add')">🔆 Add</button>
            <button onclick="navigateTo('addVerzui')">Add verzui</button>
            <button onclick="navigateTo('all_texts')">All Texts</button>
            <button onclick="navigateTo('settings')">Settings</button>
        </div>
        <button id="logout-btn" onclick="logout()">LogOut</button>
    </div>
`;
document.body.insertAdjacentHTML('afterbegin', navbar);

// Funcționalitățile navbar-ului
function logout() {
    window.location.href = 'login.html';
}

function navigateTo(page) {
    const pages = {
        home: 'index.html',
        cauta: 'Cauta (Search - Open - Edit).html',
        add: 'add.html',
        addVerzui: 'add_verzui.html',
        all_texts: 'all_texts.html',
        settings: 'settings.html'
    };
    window.location.href = pages[page] || 'index.html';
}
