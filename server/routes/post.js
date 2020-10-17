module.exports = (app) => {
  const post = require('../controllers/post');

  let router = require('express').Router();

  router.post('/', post.create);

  router.get('/', post.findAll);

  router.get('/:id', post.findOne);

  router.patch('/:id', post.update);

  router.delete('/:id', post.delete);

  app.use('/posts', router);
};
