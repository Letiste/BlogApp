const db = require('../models/index');
const Post = db.Post;

// Create and save a new Post
exports.create = async (req, res) => {
  try {
    const post = {
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
    };

    await Post.create(post);

    res.status(201).send({ message: 'Post was successfully created' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Retrieve all Posts
exports.findAll = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).send(posts);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Retrieve one Post
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findByPk(id);
    res.status(200).send(post);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Update a Post
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findByPk(id);

    post.title = req.body.title;
    post.author = req.body.author;
    post.content = req.body.content;

    await post.save();

    res.status(200).send({ message: 'Post was successfully updated' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Delete a Post
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const post = await Post.findByPk(id);

    await post.destroy();

    res.status(200).send({ message: 'Post was successfully deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
