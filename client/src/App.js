import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homepage from "./Component/Homepage/Homepage";
import CreatePost from "./Component/CreatePost/CreatePost";

import "./App.css"

function App() {
  return (
    
    <Router>

      <h1 className="header"><a href="/">BlogApp</a></h1>
      <Route path="/" exact component={Homepage} />

      <Route path="/create" exact component={CreatePost} />
    </Router>
  );
}

export default App;
