import React from "react";
import {Link} from "react-router-dom"

import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
          <div className="menu">
        <input
          className="search"
          type="search"
          placeholder="Search a blog..."
        />
        <Link to="/create">
          <button className="createButton">Create a blog</button>
        </Link>
      </div>
      <div className="separator"/>

      <div className="blogs">
        <p className="blog">Velit voluptate dolore minim proident velit in. Anim Lorem et ut incididunt nisi ea officia. Ullamco esse amet aliqua laborum eu reprehenderit in laboris tempor fugiat enim anim. Velit amet magna enim ex do cillum minim nostrud occaecat laboris aute consequat et sint. </p>
        <p className="blog">Sint do fugiat laborum pariatur dolore aliquip ut velit incididunt dolore ea quis.</p>
        <p className="blog">Je suis un blog !</p>
        <p className="blog">Je suis un blog !</p>
        <p className="blog">Je suis un blog !</p>
      </div>
    </div>
  );
}
