import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostService from '../../services/PostService';

import './Homepage.css';

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getAll()
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
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
          <Link to={'/posts/' + post.id} key={post.id}>
            <p className="postCard">
              <h3 className="postCardTitle">{post.title}</h3>
              <p className="postCardInfo">
                <span className="postCardAuthor">{post.author}</span>
                <span className="postCardDate">
                  {post.updatedAt.split('T')[0]}
                </span>
              </p>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
