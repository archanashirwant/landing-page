import React from 'react';
import { Link } from 'react-router-dom';
import SignUpButton from './SignUpButton';
import LogOutButton from './LogOutButton';

const NavBar = () => {

    const loggedIn = localStorage.getItem('userToken');

    return(
      <div className="NavBar navbar navbar-light bg-light static-top">
        <div className="container nav-links">
          <Link className="logo" to="/"><h2>Logo</h2></Link>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/feeds">Feeds</Link>
          <Link className="link" to="/contact">Contact</Link>
          { !loggedIn && <SignUpButton > Sign Up </SignUpButton>}
          { loggedIn && <LogOutButton > Sign Up </LogOutButton>}
        </div>
      </div>
    )
  }

export default NavBar;