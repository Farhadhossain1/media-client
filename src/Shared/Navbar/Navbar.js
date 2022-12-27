import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
    <li><Link className='text-xl font-semibold text-white ' to="/">Home</Link></li>
    <li><Link className='text-xl font-semibold text-white ' to="/">Media</Link></li>
    <li><Link className='text-xl font-semibold text-white ' to="/">Message</Link></li>
    <li><Link className='text-xl font-semibold text-white ' to="/">About</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Get started</Link>
        </div>
      </div>
    );
};

export default Navbar;