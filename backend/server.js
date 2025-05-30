const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');

const pool = new Pool({
  connectionString: 'postgresql://postgres:MercatinoDelLibro2025@aws-0-eu-west-3.pooler.supabase.com:6543/postgres',
  ssl: { rejectUnauthorized: false }
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ROUTE BASE
app.get('/', (req, res) => {
  res.send('📚 API Server Online - Libri e Clienti');
});

// ✅ OTTIENI TUTTI I LIBRI
app.get('/api/libri', async (req, res) => {
  const result = await pool.query('SELECT * FROM libri');
  res.json(result.rows);
});

// ✅ OTTIENI TUTTI I CLIENTI
app.get('/api/clienti', async (req, res) => {
  const result = await pool.query('SELECT * FROM clienti');
  res.json(result.rows);
});

// ✅ REGISTRA UN NUOVO LIBRO
app.post('/api/libri', async (req, res) => {
  const {
    idLibro, materia, codice, autore, titolo, numeroSerie,
    prezzo, percentualeDiRivendita, id, proprietario, acquirente
  } = req.body;

  await pool.query(
    `INSERT INTO libri
      (idLibro, materia, codice, autore, titolo, numeroSerie, prezzo, percentualeDiRivendita, id, proprietario, acquirente)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
    [
      idLibro, materia, codice, autore, titolo, numeroSerie,
      prezzo, percentualeDiRivendita, id,
      proprietario ? JSON.stringify(proprietario) : null,
      acquirente ? JSON.stringify(acquirente) : null
    ]
  );
  res.status(201).json({ messaggio: 'Libro registrato con successo' });
});

// ✅ REGISTRA UN NUOVO CLIENTE
app.post('/api/clienti', async (req, res) => {
  const { idCliente, name, surname, phoneNumb, email, saldo } = req.body;

  await pool.query(
    `INSERT INTO clienti (idCliente, name, surname, phoneNumb, email, saldo)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [idCliente, name, surname, phoneNumb, email, saldo]
  );
  res.status(201).json({ messaggio: 'Cliente registrato con successo' });
});

// ✅ ELIMINA UN CLIENTE
app.delete('/api/clienti/:id', async (req, res) => {
  const id = req.params.id;

  // Elimina il cliente
  await pool.query('DELETE FROM clienti WHERE idCliente = $1', [id]);

  // Aggiorna i libri: azzera i riferimenti a quel cliente
  await pool.query(
    `UPDATE libri SET proprietario = proprietario - 'idCliente'
     WHERE proprietario->>'idCliente' = $1`, [id]
  );
  await pool.query(
    `UPDATE libri SET acquirente = acquirente - 'idCliente'
     WHERE acquirente->>'idCliente' = $1`, [id]
  );

  res.json({ messaggio: 'Cliente eliminato e libri aggiornati' });
});

// AVVIO SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server online su http://localhost:${PORT}`);
});