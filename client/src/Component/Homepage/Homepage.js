import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostService from '../../services/PostService';

import './Homepage.css';

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getAll()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log('ERROR', err));
  }, []);

  return (
    <div className="homepage">
      <div className="menu">
        <input
          className="search"
          type="search"
          placeholder="Search a post..."
        />
        <Link to="/create">
          <button className="createButton">Create a post</button>
        </Link>
      </div>

      <div className="separator" />

      <div className="posts">
        {posts.map((post) => (
          <Link to={'/posts/' + post.id}>
            <p key={post.id} className="post">
              {post.title}, {post.author}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
