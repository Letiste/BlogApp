import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState } from 'draft-js';

import PostService from '../../services/PostService';

import './Post.css';

export default function Post() {
  const [post, setPost] = useState();

  const { id } = useParams();

  useEffect(() => {
    PostService.getOne(id)
      .then((res) => {
        setPost(res.data);
        console.log(res.data.updatedAt);
      })
      .catch(console.log);
  }, [id]);

  return (
    <>
      {post && (
        <div className="post">
          <h2 className="postTitle">{post.title}</h2>
          <p className="postInfo">
            <span className="postAuthor">{post.author}</span>
            <span className="postDate">{post.updatedAt.split('T')[0]}</span>
          </p>
          <div className="postSeparator" />
          <Editor
            className="postContent"
            readOnly
            toolbarHidden
            editorState={
              post.content &&
              EditorState.createWithContent(convertFromRaw(post.content))
            }
          />
        </div>
      )}
    </>
  );
}
