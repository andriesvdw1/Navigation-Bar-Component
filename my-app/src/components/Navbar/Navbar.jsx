import React from 'react'
import './Navbar.css'
function Navbar({links, hrefs}) {
  return (
    <div>
        {links.map((link, index) => (
            <a key={index} href={hrefs[index]}>{link} |</a> 
        ))}
    </div>
  )
}

export default Navbar