import http from './http-common';

function create(post) {
  return http.post('/posts', post);
}

function getAll(search) {
  return http.get(`/posts?search=${search}`);
}

function getOne(id) {
  return http.get(`/posts/${id}`);
}

function update(id) {
  return http.patch(`/posts/${id}`);
}

function destroy(id) {
  return http.delete(`/posts/${id}`);
}

export default {
  create,
  getAll,
  getOne,
  update,
  destroy,
};
