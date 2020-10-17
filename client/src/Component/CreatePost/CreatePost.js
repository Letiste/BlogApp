import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './CreatePost.css';

function onEditorStateChange(editorState, setValue) {
  const rawContentState = convertToRaw(editorState.getCurrentContent());
  setValue(draftToMarkdown(rawContentState));
}

export default function CreatePost() {
  const [markdown, setMarkdown] = useState();

  function handlePublish() {
    console.log(markdown);
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
            />
            <label className="label" htmlFor="autor">
              Autor :
            </label>
            <input className="inputForm" id="autor" placeholder="John Doe" />
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
            onEditorStateChange(editorState, setMarkdown)
          }
        />
      </div>
    </div>
  );
}
