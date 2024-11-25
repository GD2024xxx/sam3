// Asigură-te că DOM-ul este încărcat înainte de a rula scriptul
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
  
    // Creează și injectează HTML-ul modalului pentru setări
    const settingsModalHTML = `
      <div id="settingsModal" style="display: none;">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <span id="closeSettingsModal" class="close-button">&times;</span>
          <h2>Settings</h2>
          <ul>
            <li><button id="themeButton">Themes</button></li>
            <li><button id="languageButton">Language</button></li>
            <li><button id="nightModeButton">Night Mode</button></li>
            <li><button id="dayModeButton">Day Mode</button></li>
            <li><button id="shortcutsButton">Shortcuts</button></li>
            <li><button id="accountButton">Account</button></li>
          </ul>
        </div>
      </div>
    `;
  
    // Creează și injectează HTML-ul modalului pentru detalii cont
    const accountModalHTML = `
      <div id="accountModal" style="display: none;">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <button id="backButton" class="back-button">Back</button>
          <span id="closeAccountModal" class="close-button">&times;</span>
          <h2>Account Details</h2>
          <ul>
            <li>Username: <span id="username">xxx</span></li>
            <li>Password: <span id="password">********</span></li>
            <li>Email: <span id="email">user@example.com</span></li>
            <li>System Preferences: <span id="preferences">Default</span></li>
          </ul>
        </div>
      </div>
    `;
  
    // Adaugă HTML-ul modalurilor în pagina curentă
    document.body.insertAdjacentHTML("beforeend", settingsModalHTML);
    document.body.insertAdjacentHTML("beforeend", accountModalHTML);
  
    // Stiluri CSS pentru modaluri
    const style = document.createElement("style");
    style.innerHTML = `
      #settingsModal, #accountModal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
      }
      .modal-content {
        position: relative;
        background: #212121;
        color: white;
        padding: 20px;
        border-radius: 8px;
        z-index: 1001;
        width: 400px;
        text-align: center;
      }
      .close-button, .back-button {
        position: absolute;
        top: 10px;
        font-size: 20px;
        cursor: pointer;
        color: white;
      }
      .close-button {
        right: 10px;
      }
      .back-button {
        left: 10px;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 20px 0;
      }
      li {
        margin: 10px 0;
      }
      button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        font-size: 16px;
      }
      button:hover {
        background-color: #0056b3;
      }
    `;
    document.head.appendChild(style);
  
    // Referințe la elemente
    const settingsModal = document.getElementById("settingsModal");
    const accountModal = document.getElementById("accountModal");
    const closeSettingsModal = document.getElementById("closeSettingsModal");
    const closeAccountModal = document.getElementById("closeAccountModal");
    const accountButton = document.getElementById("accountButton");
    const backButton = document.getElementById("backButton");
  
    // Funcție pentru toggle-ul modalului
    const toggleModal = (modal) => {
      const isHidden = modal.style.display === "none" || modal.style.display === "";
      modal.style.display = isHidden ? "flex" : "none";
      console.log(`Modal is now ${isHidden ? "visible" : "hidden"}`);
    };
  
    // Adaugă ascultător pentru combinația Shift + S
    document.addEventListener("keydown", (event) => {
      console.log(`Key pressed: ${event.code}, Shift: ${event.shiftKey}`);
      if (event.code === "KeyS" && event.shiftKey) {
        event.preventDefault();
        toggleModal(settingsModal);
      }
    });
  
    // Închide modalul pentru setări la apăsarea pe "X"
    closeSettingsModal.addEventListener("click", () => {
      settingsModal.style.display = "none";
      console.log("Settings modal closed with X button");
    });
  
    // Deschide modalul de detalii cont la apăsarea butonului "Account"
    accountButton.addEventListener("click", () => {
      toggleModal(accountModal);
      settingsModal.style.display = "none"; // Închide modalul de setări dacă este deschis
    });
  
    // Închide modalul pentru detalii cont la apăsarea pe "X"
    closeAccountModal.addEventListener("click", () => {
      accountModal.style.display = "none";
      console.log("Account modal closed with X button");
    });
  
    // Întoarcerea la modalul de setări la apăsarea butonului "Back"
    backButton.addEventListener("click", () => {
      accountModal.style.display = "none"; // Închide modalul contului
      toggleModal(settingsModal); // Deschide modalul de setări
      console.log("Back button clicked, returning to settings modal");
    });
  
    // Închide orice modal când se apasă pe overlay
    const modals = [settingsModal, accountModal];
    modals.forEach(modal => {
      modal.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal-overlay")) {
          modal.style.display = "none";
          console.log("Modal closed by clicking on overlay");
        }
      });
    });
  });
  