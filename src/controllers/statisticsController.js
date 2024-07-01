const pool = require('../utils/db');

// Obtener número de publicaciones por categoría
exports.getPostsByCategory = async (req, res) => {
  try {
    const [stats] = await pool.query('SELECT c.name, COUNT(p.id) as count FROM categories c LEFT JOIN post_categories pc ON c.id = pc.category_id LEFT JOIN posts p ON p.id = pc.post_id GROUP BY c.name');
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
