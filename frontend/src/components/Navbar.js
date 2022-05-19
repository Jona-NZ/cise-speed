import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container pt-4">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" width="125px" height="37.5px" to="/">
            <img src="/logo.png" alt="" />
          </Link>

          <button
            className="navbar-burger navbar-end"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="submit">
              Submit Article
            </Link>
            <Link className="navbar-item" to="search">
              Search
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-link is-light" to="moderator">
                  Moderator Panel
                </Link>
                <Link className="button is-link is-light" to="analyst">
                  Analyst Panel
                </Link>
                <Link className="button is-danger is-light" to="admin">
                  Admin Panel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
