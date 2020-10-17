import http from './http-common';

function create(post) {
  http.post('/posts', post);
}

function getAll() {
  http.get('/posts');
}

function getOne(id) {
  http.get(`/posts/${id}`);
}

function update(id) {
  http.patch(`/posts/${id}`);
}

function destroy(id) {
  http.delete(`/posts/${id}`);
}

export default {
  create,
  getAll,
  getOne,
  update,
  destroy,
};
