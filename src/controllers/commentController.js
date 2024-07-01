const Comment = require('../models/Comment');

// Obtener todos los comentarios
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.getAll();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un nuevo comentario
exports.createComment = async (req, res) => {
  const { post_id, user_id, content } = req.body;
  try {
    const id = await Comment.create({ post_id, user_id, content });
    res.status(201).json({ id, post_id, user_id, content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un comentario
exports.updateComment = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    await Comment.update(id, { content });
    res.json({ message: 'Comment updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un comentario
exports.deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    await Comment.delete(id);
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
