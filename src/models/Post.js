const pool = require('../utils/db');

class Post {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM posts');
    return rows;
  }

  static async create({ user_id, title, content }) {
    const [result] = await pool.query(
      'INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)',
      [user_id, title, content]
    );
    return result.insertId;
  }

  static async update(id, { title, content }) {
    await pool.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [
      title,
      content,
      id,
    ]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM posts WHERE id = ?', [id]);
  }
}

module.exports = Post;
