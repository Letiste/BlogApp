import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostService from '../../services/PostService';

import './Homepage.css';

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(['']);

  useEffect(() => {
    PostService.getAll(search)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log('ERROR', err));
  }, [search]);

  return (
    <div className="homepage">
      <div className="menu">
        <input
          className="search"
          type="search"
          placeholder="Search a post..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/create">
          <button className="createButton">Create a post</button>
        </Link>
      </div>

      <div className="separator" />

      <div className="posts">
        {posts.length > 0 ? (
          <>
            {posts.map((post) => (
              <Link to={'/posts/' + post.id} key={post.id}>
                <p className="postCard">
                  <p className="postCardTitle">{post.title}</p>
                  <p className="postCardInfo">
                    <span className="postCardAuthor">{post.author}</span>
                    <span className="postCardDate">
                      {post.updatedAt.split('T')[0]}
                    </span>
                  </p>
                </p>
              </Link>
            ))}
          </>
        ) : (
          <p className="postCard">No posts were found :(</p>
        )}
      </div>
    </div>
  );
}
