import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavBar = (props) => {
  // setTimeout(() => {
  //   props.history.push('./about')
  // }, 2000);

  return (
    <nav className="nav-wrappe red darken-3">
      <div className="container">
        <a className="brand-logo">Poke Times</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(NavBar)