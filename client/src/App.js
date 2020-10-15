import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Homepage from "./Component/Homepage/Homepage"
import CreateBlog from "./Component/CreateBlog/CreateBlog"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      
      <Route path="/create" exact component={CreateBlog} />

    </Router>
  )
}

export default App;
