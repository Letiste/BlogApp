import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <p>
      {post.title}, {post.author}, {post.content}
    </p>
  );
}
