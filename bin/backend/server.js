const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;
const DB_FILE = 'db.json';

app.use(cors());
app.use(express.json());

function readDB() {
    if (!fs.existsSync(DB_FILE)) {
        fs.writeFileSync(DB_FILE, JSON.stringify({ libri: [], clienti: [] }, null, 2));
    }
    return JSON.parse(fs.readFileSync(DB_FILE));
}

function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// --- LIBRI ---
app.get('/libri', (req, res) => {
    const db = readDB();
    res.json(db.libri);
});
app.post('/libri', (req, res) => {
    const db = readDB();
    db.libri.push(req.body);
    writeDB(db);
    res.status(201).json(req.body);
});
app.delete('/libri/:id', (req, res) => {
    const db = readDB();
    db.libri = db.libri.filter(libro => libro.id !== req.params.id);
    writeDB(db);
    res.sendStatus(200);
});

// --- CLIENTI ---
app.get('/clienti', (req, res) => {
    const db = readDB();
    res.json(db.clienti);
});
app.post('/clienti', (req, res) => {
    const db = readDB();
    db.clienti.push(req.body);
    writeDB(db);
    res.status(201).json(req.body);
});
app.delete('/clienti/:id', (req, res) => {
    const db = readDB();
    db.clienti = db.clienti.filter(cliente => cliente.idCliente !== req.params.id);
    writeDB(db);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});