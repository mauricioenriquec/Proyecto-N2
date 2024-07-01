const pool = require('../utils/db');

class Category {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM categories');
    return rows;
  }

  static async create({ name }) {
    const [result] = await pool.query('INSERT INTO categories (name) VALUES (?)', [name]);
    return result.insertId;
  }

  static async update(id, { name }) {
    await pool.query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM categories WHERE id = ?', [id]);
  }
}

module.exports = Category;
