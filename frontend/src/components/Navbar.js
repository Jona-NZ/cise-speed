import React from 'react';

const Navbar = () => {
  return (
    <section className='section'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' width='125px' height='37.5px' href='/'>
            <img src='/logo.png' alt='' />
          </a>

          <button
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item' href='/'>
              Home
            </a>
            <a className='navbar-item' href='search'>
              Search
            </a>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-link is-light' href='moderator'>
                  Moderator Panel
                </a>
                <a className='button is-link is-light' href='analyst'>
                  Analyst Panel
                </a>
                <a className='button is-danger is-light' href='moderator'>
                  Admin Panel
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
