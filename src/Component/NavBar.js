import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../bookmark-icon-1-614x460.png'

const NavBar = (props) => {

    return(
    <nav>
    <div className="nav-bar">
      <Link to="home"><img className="logo" src={logo}/></Link>
      <div className="navLink"><Link to="/read">Read</Link></div>
      <div className="navLink"><Link to="/unread">Unread</Link></div>
      <div className="navLink"><Link to="/home">Articles</Link></div>
      <div className="navLink"><Link to="/popular">Popular</Link></div>
    </div>
    </nav>
    )
}

export default NavBar
