const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dbPath = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());

// Legge il contenuto del db
function leggiDB() {
  const raw = fs.readFileSync(dbPath);
  return JSON.parse(raw);
}

// Scrive nel db
function scriviDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// ROUTE BASE
app.get('/', (req, res) => {
  res.send('📚 API Server Online - Libri e Clienti');
});

// ✅ OTTIENI TUTTI I LIBRI
app.get('/api/libri', (req, res) => {
  const db = leggiDB();
  res.json(db.libri);
});

// ✅ OTTIENI TUTTI I CLIENTI
app.get('/api/clienti', (req, res) => {
  const db = leggiDB();
  res.json(db.clienti);
});

// ✅ REGISTRA UN NUOVO LIBRO
app.post('/api/libri', (req, res) => {
  const nuovoLibro = req.body;

  if (!nuovoLibro || !nuovoLibro.idLibro || !nuovoLibro.titolo) {
    return res.status(400).json({ errore: 'Dati del libro incompleti' });
  }

  const db = leggiDB();
  const esiste = db.libri.some(libro => libro.idLibro === nuovoLibro.idLibro);

  if (esiste) {
    return res.status(409).json({ errore: 'Libro già registrato' });
  }

  db.libri.push(nuovoLibro);
  scriviDB(db);

  res.status(201).json({ messaggio: 'Libro registrato con successo', libro: nuovoLibro });
});

// ✅ REGISTRA UN NUOVO CLIENTE
app.post('/api/clienti', (req, res) => {
  const nuovoCliente = req.body;

  if (!nuovoCliente || !nuovoCliente.idCliente || !nuovoCliente.name) {
    return res.status(400).json({ errore: 'Dati del cliente incompleti' });
  }

  const db = leggiDB();
  const esiste = db.clienti.some(c => c.idCliente === nuovoCliente.idCliente);

  if (esiste) {
    return res.status(409).json({ errore: 'Cliente già registrato' });
  }

  db.clienti.push(nuovoCliente);
  scriviDB(db);

  res.status(201).json({ messaggio: 'Cliente registrato con successo', cliente: nuovoCliente });
});

// AVVIO SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server online su http://localhost:${PORT}`);
});
