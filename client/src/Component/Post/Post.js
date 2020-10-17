import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState } from 'draft-js';

import PostService from '../../services/PostService';

export default function Post() {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    PostService.getOne(id)
      .then((res) => setPost(res.data))
      .catch(console.log);
  });

  return (
    <div>
      <p>
        {post.title}, {post.author}
      </p>
      <Editor
        readOnly
        toolbarHidden
        editorState={
          post.content &&
          EditorState.createWithContent(convertFromRaw(post.content))
        }
      />
    </div>
  );
}
