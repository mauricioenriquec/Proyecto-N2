const express = require('express');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./src/routes/users');
const postRoutes = require('./src/routes/posts');
const categoryRoutes = require('./src/routes/categories');
const commentRoutes = require('./src/routes/comments');
const statisticsRoutes = require('./src/routes/statistics');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/statistics', statisticsRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
