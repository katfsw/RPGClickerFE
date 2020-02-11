import React from 'react';
import {Link} from 'react-router-dom'


function NavBar () {

    return (
            <div className="navbar">
              <Link to="/"><a>Home</a></Link>
              <Link to="/play"><a>Play!</a></Link>
              <Link to="/register"><a>Register</a></Link>
              <Link to="/login"><a>Login</a></Link>
              <Link to="/dashboard"><a>Dashboard</a></Link>
            </div>
    );
  }

export default NavBar;