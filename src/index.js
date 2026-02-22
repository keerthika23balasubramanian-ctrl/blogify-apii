const express = require('express');
const app = express();

app.use(express.json());

const postRoutes = require('./routes/posts.routes');

app.use('/api/v1/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Blogify API running');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});