import React from 'react';
import logo from './logo.svg';
import { links } from './data';

const Sidebar = () => {
  

  return (
    <aside >
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
       
      </div>
      <ul className='links'>
        {links.slice(0, 2).map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
            
          );
        })}
        <li> <h5 className='share' >SHARE</h5></li>
      </ul>
     
      <ul className='links'>
        {links.slice(2).map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
