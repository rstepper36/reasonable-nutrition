const Post = require('./models/Posts');

const postController = {
  createPost: (req, res) => {
    const { title, content } = req.body;
    Post.create({ title, content })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {
        console.error('Error creating post:', error);
        res.status(500).send('Internal Server Error');
      });
  },

  deletePost: (req, res) => {
    const postId = req.params.id;
    Post.destroy({ where: { id: postId } })
      .then(() => {
        res.sendStatus(204); // Success, no content
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
        res.status(500).send('Internal Server Error');
      });
  },

  getEditPost: (req, res) => {
    const postId = req.params.id;
    Post.findByPk(postId)
      .then((post) => {
        res.render('edit-post', { post });
      })
      .catch((error) => {
        console.error('Error retrieving post:', error);
        res.status(500).send('Internal Server Error');
      });
  },

  updatePost: (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    Post.update({ title, content }, { where: { id: postId } })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {
        console.error('Error updating post:', error);
        res.status(500).send('Internal Server Error');
      });
  },

  getAllPosts: (req, res) => {
    Post.findAll()
      .then((posts) => {
        res.render('index', { posts });
      })
      .catch((error) => {
        console.error('Error retrieving posts:', error);
        res.status(500).send('Internal Server Error');
      });
  },
};

module.exports = postController;
