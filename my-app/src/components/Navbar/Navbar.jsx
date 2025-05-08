import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ links, hrefs }) {
  const [displayNavbar, setDisplayNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setDisplayNavbar(true);
      } else {
        setDisplayNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${displayNavbar ? 'visible' : 'hidden'}`}>
      {links.map((link, index) => (
        <a className="nav-link" key={index} href={hrefs[index]}>{link}</a>
      ))}
    </div>
  );
}

export default Navbar;