const express = require('express');
const fs = require('fs');
const path = require('path');

module.exports = function(app) {
    const PORT = 3000;

    // Middleware for processing JSON data from requests
    app.use(express.json());

    // Serve the HTML file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    // Endpoint for saving data to a text file
    app.post('/save', (req, res) => {
        const { cr, situatie, departament, anObm, speech, regulament } = req.body;

        // Build the filename
        const fileName = `${situatie} - ${cr}.txt`;

        // Structure of the file content
        const content = `🔆 CR: ${cr}\n` +
                        `🔆 Situație: ${situatie}\n` +
                        `🔆 Departament: ${departament}\n` +
                        `\n===========================\n${anObm}\n\n\n` +
                        `🔆 SPEECH: ::::::::::::::::::::::::::::::::::::::::\n${speech}\n` +
                        `===========================\n\n\n` +
                        `🔆 Regulament: ::::::::::::::::::::::::::::::::::::\n${regulament}`;

        // Path to the "SALVATE" folder
        const folderPath = path.join(__dirname, 'files');

        // Create the "SALVATE" folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        // Complete file path
        const filePath = path.join(folderPath, fileName);

        // Save the content to the file
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                console.error('Error saving file:', err);
                return res.status(500).json({ message: 'Error saving the file' });
            }
            res.json({ message: 'Data has been saved successfully!' });
        });
    });
};
