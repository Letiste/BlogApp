import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';

import PostService from '../../services/PostService';

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './CreatePost.css';

function onEditorStateChange(editorState, setValue) {
  const rawContentState = convertToRaw(editorState.getCurrentContent());
  setValue(rawContentState);
}

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState();

  let history = useHistory();

  function handlePublish() {
    const post = { title, author, content };
    PostService.create(post)
      .then(() => history.push('/'))
      .catch((err) => console.log(err));
  }

  return (
    <div className="createPost">
      <h2>Create a Post</h2>
      <div className="form">
        <div className="formTop">
          <div className="detailsPost">
            <label className="label" htmlFor="title">
              Title :
            </label>
            <input
              className="inputForm"
              id="title"
              placeholder="My super Post"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="label" htmlFor="author">
              Author :
            </label>
            <input
              className="inputForm"
              id="author"
              placeholder="John Doe"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <input
            className="publishButton"
            type="submit"
            value="Publish"
            onClick={handlePublish}
          />
        </div>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={(editorState) =>
            onEditorStateChange(editorState, setContent)
          }
        />
      </div>
    </div>
  );
}
