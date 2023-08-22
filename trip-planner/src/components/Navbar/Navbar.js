import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  
  return (
    <div>
      <nav className='navbar_container'> 

        <div className="main_logo">
          <Link to="/"><img src="https://i.ibb.co/QKkrvRx/Main-logo.png" alt="Trip Planner Logo" width="125px" height="55px"/></Link>
        </div>

        <div>
          <ul className='nav_list'>
            <li className='navbar_item'><Link to="/tours">Tours</Link></li>
            <li className='navbar_item'><Link to="/stories">Stories</Link></li>
          </ul>
        </div>  
        
        <div className='user_icons'>
        <div>
          <button className='sign_in_button'>Sign in</button>
        </div>

        <div>
          <img src="https://i.ibb.co/PzYs4mp/user.png" alt="User_icon"
          width="32px" height="32px" />
        </div>
        </div>
        
        
      </nav>

    </div>
  )
}

export default Navbar
