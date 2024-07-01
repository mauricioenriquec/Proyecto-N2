const pool = require('../utils/db');

class Comment {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM comments');
    return rows;
  }

  static async create({ post_id, user_id, content }) {
    const [result] = await pool.query(
      'INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)',
      [post_id, user_id, content]
    );
    return result.insertId;
  }

  static async update(id, { content }) {
    await pool.query('UPDATE comments SET content = ? WHERE id = ?', [content, id]);
  }

  static async delete(id) {
    await pool.query('DELETE FROM comments WHERE id = ?', [id]);
  }
}

module.exports = Comment;
