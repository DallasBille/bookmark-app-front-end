import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = (props) => {

    return(
    <nav>
    <div className="nav-bar">
      <div className="navLink"><Link to="/read">Read</Link></div>
      <div className="navLink"><Link to="/unread">Unread</Link></div>
      <div className="navLink"><Link to="/home">Articles</Link></div>
      <div className="navLink"><Link to="/popular">Popular</Link></div>
    </div>
    </nav>
    )
}

export default NavBar
