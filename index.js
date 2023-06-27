const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');
const Post = require('./models/Posts');
const postController = require('./PostController');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

sequelize
  .sync()
  .then(() => {
    console.log('Database sync successful');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

app.get('/posts/new', (req, res) => {
  res.render('new');
});

app.post('/posts', postController.createPost);

app.delete('/posts/:id', postController.deletePost);

app.get('/posts/:id/edit', postController.getEditPost);

app.put('/posts/:id', postController.updatePost);

app.get('/', postController.getAllPosts);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
