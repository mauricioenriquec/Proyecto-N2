const Category = require('../models/Category');

// Obtener todas las categorías
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.getAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una nueva categoría
exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const id = await Category.create({ name });
    res.status(201).json({ id, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una categoría
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    await Category.update(id, { name });
    res.json({ message: 'Category updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una categoría
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.delete(id);
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
