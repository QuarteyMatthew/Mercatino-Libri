const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dbPath = process.env.RENDER ? '/tmp/db.json' : path.join(__dirname, 'db.json');

// Se siamo su Render e il file non esiste, copialo dalla versione di default
if (process.env.RENDER && !fs.existsSync(dbPath)) {
  fs.copyFileSync(path.join(__dirname, 'db.json'), dbPath);
}

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
// ✅ ELIMINA UN CLIENTE E AGGIORNA I LIBRI ASSOCIATI
app.delete('/api/clienti/:id', (req, res) => {
  const id = req.params.id;
  const db = leggiDB();

  // Rimuovi il cliente dalla lista
  const clientiFiltrati = db.clienti.filter(c => c.idCliente !== id);

  // Aggiorna i libri: se il proprietario o acquirente è il cliente eliminato, azzera i riferimenti
  db.libri = db.libri.map(libro => {
    // Rimuovi proprietario se corrisponde
    if (libro.proprietario && libro.proprietario.idCliente === id) {
      libro.proprietario = { idCliente: "", saldo: 0 };
    }
    // Rimuovi acquirente se corrisponde
    if (libro.acquirente && libro.acquirente.idCliente === id) {
      libro.acquirente = { idCliente: "", saldo: 0 };
    }
    return libro;
  });

  db.clienti = clientiFiltrati;
  scriviDB(db);

  res.json({ messaggio: 'Cliente eliminato e libri aggiornati' });
});

// AVVIO SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server online su http://localhost:${PORT}`);
});
