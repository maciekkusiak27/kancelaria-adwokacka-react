import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "o nas", path: "/about", exact: false },
  { name: "zakres usług", path: "/services", exact: false },
  { name: "kontakt", path: "/contact", exact: false },
]

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  const menu = list.map(item => (
    <li key={item.name} onClick={closeMobileMenu}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}
      </NavLink>
    </li>
  ))

  return (
    <nav className="main">
      <div className='list'>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {menu}
      </ul>
      </div>
      <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
    </nav>
  );
}

export default Navigation;