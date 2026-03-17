const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Pour lire le JSON envoyé par Vue.js

// Configuration de la connexion PostgreSQL 
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tododb',
  password: 'Ghizlane123&',
  port: 5432,
});

// Route de test
app.get('/', (req, res) => {
  res.send('Le serveur Express fonctionne !');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
    res.json(result.rows); // Envoie la liste des tâches au Front-end [cite: 37]
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/tasks', async (req, res) => {
  const { title, task_date} = req.body; // Récupère le titre envoyé par Vue.js [cite: 32]
  try {
    const result = await pool.query(
      'INSERT INTO tasks (title, status, task_date) VALUES ($1, $2, $3) RETURNING *',
      [title, 'en cours', task_date] // Par défaut, une tâche est "en cours" [cite: 39]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body; // L'utilisateur peut modifier le titre ou le statut [cite: 41]
  try {
    await pool.query(
      'UPDATE tasks SET title = $1, status = $2 WHERE id = $3',
      [title, status, id]
    );
    res.json({ message: "Tâche mise à jour" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: "Tâche supprimée" }); // Suppression irréversible [cite: 46]
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});