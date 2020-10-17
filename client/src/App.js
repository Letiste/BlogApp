import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './Component/Homepage/Homepage';
import CreatePost from './Component/CreatePost/CreatePost';
import Post from './Component/Post/Post';

import './App.css';

function App() {
  return (
    <Router>
      <h1 className="header">
        <a href="/">BlogApp</a>
      </h1>
      <Switch>
        <Route path="/" exact component={Homepage} />

        <Route path="/create" exact component={CreatePost} />

        <Route path="/posts/:id" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
