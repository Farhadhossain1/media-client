import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Comtext/AuthProvider/AuthProvider';


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then( () => {})
    .catch(error =>{
      console.log(error);
    })
  }

    const menuItems = <>
    <li><Link className='text-xl font-bold text-slate-900  ' to="/">Home</Link></li>
    <li><Link className='text-xl font-bold text-slate-900  ' to="/media">Media</Link></li>
    <li><Link className='text-xl font-bold text-slate-900  ' to="/">Message</Link></li>
    <li><Link className='text-xl font-bold text-slate-900  ' to="/about">About</Link></li>
    <li><Link className='text-xl font-bold text-slate-900  ' to="/login">Login</Link></li>
    {user?.uid ?
    <li><button className='text-xl font-bold text-slate-900  ' onClick={handleLogOut}>Sign Out</button></li> : <li><Link className='text-xl font-bold text-slate-900  ' to="/signup">Sign Up</Link></li>
  }
    
    </>
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <a href=""><img className='w-12' src="https://i.ibb.co/R9JdFDD/camera2.png" alt="" /></a>
          <Link className="btn btn-ghost normal-case text-3xl font-bold text-red-800">Img <span className='text-yellow-500'>Club</span></Link>
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