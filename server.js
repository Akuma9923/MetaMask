const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Servire fișiere statice din directorul 'public'
app.use(express.static('public'));

// Endpoint pentru încărcarea fișierelor
app.post('/upload', upload.array('files[]'), (req, res) => {
    res.send('Files uploaded successfully.');
});

// Endpoint pentru servirea 'index.html' la rădăcină
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rulează serverul
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
