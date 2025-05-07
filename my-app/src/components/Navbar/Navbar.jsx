import React from 'react'
import './Navbar.css'
function Navbar({links, hrefs}) {
  return (
    <div className='navbar'>
        {links.map((link, index) => (
            <a className='nav-link' key={index} href={hrefs[index]}>{link}</a> 
        ))}
    </div>
  )
}

export default Navbar