// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>

          <li>
            <NavLink to="/currency-converter" className={({ isActive }) => (isActive ? 'active' : '')}>Currency Converter</NavLink>
          </li>
          <li>
            <NavLink to="/language-translator" className={({ isActive }) => (isActive ? 'active' : '')}>Language Translator</NavLink>
          </li>
          <li>
            <NavLink to="/journal" className={({ isActive }) => (isActive ? 'active' : '')}>Journal</NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
