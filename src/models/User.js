const pool = require('../utils/db');

class User {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  }

  static async create({ username, email, password, role }) {
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
      [username, email, password, role]
    );
    return result.insertId;
  }

  static async update(id, { username, email, password, role }) {
    await pool.query(
      'UPDATE users SET username = ?, email = ?, password = ?, role = ? WHERE id = ?',
      [username, email, password, role, id]
    );
  }

  static async delete(id) {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
  }
}

module.exports = User;
