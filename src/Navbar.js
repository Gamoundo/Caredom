import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'red',
    textDecoration: 'none',
    color: 'pink',
  }

function Navbar() {
    return (
        <div>
            <NavLink
          to="/"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Home</NavLink>
          <NavLink
          to="/dogs"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Dogs</NavLink>
          <NavLink
          to="/cats"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Cats</NavLink>
          <NavLink
          to="/babies"
          
          exact
          
          style={link}
          
          activeStyle={{
            background: 'green'
          }}
          >Babies</NavLink>
        </div>
    )

}

export default Navbar;