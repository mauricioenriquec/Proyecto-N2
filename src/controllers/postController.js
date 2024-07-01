const Post = require('../models/Post');

// Obtener todas las publicaciones
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una nueva publicación
exports.createPost = async (req, res) => {
  const { user_id, title, content } = req.body;
  try {
    const id = await Post.create({ user_id, title, content });
    res.status(201).json({ id, user_id, title, content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una publicación
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    await Post.update(id, { title, content });
    res.json({ message: 'Post updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una publicación
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.delete(id);
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
