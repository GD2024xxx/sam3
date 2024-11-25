const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Servirea fișierelor statice din directorul 'public'
app.use(express.static('public'));

// Importă codul din add.js
require('./public/add.js')(app);

// Endpoint pentru a returna lista de fișiere .txt din folderul public/files
app.get('/files', (req, res) => {
    const folderPath = path.join(__dirname, 'public', 'files');
    
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Eroare la citirea folderului' });
        }
        
        // Filtrăm doar fișierele .txt
        const txtFiles = files.filter(file => file.endsWith('.txt'));
        res.json(txtFiles); // Returnăm lista de fișiere
    });
});

// Endpoint pentru a returna conținutul unui fișier .txt
app.get('/file-content', (req, res) => {
    const fileName = req.query.name; // Numele fișierului căutat
    const filePath = path.join(__dirname, 'public', 'files', fileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Fișierul nu a fost găsit' });
        }
        res.json({ content: data }); // Returnăm conținutul fișierului
    });
});

app.listen(port, () => {
    console.log(`Serverul rulează pe http://localhost:${port}`);
});
