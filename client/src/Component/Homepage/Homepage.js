import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostService from '../../services/PostService';

import './Homepage.css';
import deleteIcon from '../../assets/deleteIcon.svg';

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(['']);

  useEffect(() => {
    PostService.getAll(search)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log('ERROR', err));
  }, [search, posts]);

  function handleDeletePostCard(e, id, indexArray) {
    e.preventDefault();
    PostService.destroy(id)
      .then(() => {
        const newPosts = posts.splice(indexArray, 1);
        setPosts(newPosts);
      })
      .catch(console.log);
  }

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
            {posts.map((post, index) => (
              <div className="postCard" key={post.id} id={post.id}>
                <Link to={'/posts/' + post.id}>
                  <p className="postCardTitle">{post.title}</p>
                  <img
                    className="postCardDelete"
                    src={deleteIcon}
                    alt="Delete"
                    onClick={(e) => handleDeletePostCard(e, post.id, index)}
                  />
                  <p className="postCardInfo">
                    <span className="postCardAuthor">{post.author}</span>
                    <span className="postCardDate">
                      {post.updatedAt.split('T')[0]}
                    </span>
                  </p>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <p className="postCard">No posts were found :(</p>
        )}
      </div>
    </div>
  );
}
