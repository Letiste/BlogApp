import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './CreatePost.css';

export default function CreatePost() {
  return (
    <div className="createPost">
      <h2>Create a Post</h2>
      <div className="form">
        <div className="formTop">
          <div className="detailsPost">
            <label className="label" for="title">
              Title :
            </label>
            <input
              className="inputForm"
              id="title"
              placeholder="My super Post"
            />
            <label className="label" for="autor">
              Autor :
            </label>
            <input className="inputForm" id="autor" placeholder="John Doe" />
          </div>
          <input className="publishButton" type="submit" value="Publish" />
        </div>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
      </div>
    </div>
  );
}
