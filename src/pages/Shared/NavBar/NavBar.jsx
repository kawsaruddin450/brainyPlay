import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../../assets/user.png';

const NavBar = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><a>All Toys</a></li>
        <li><a>My Toys</a></li>
        <li><a>Blogs</a></li>
    </>
    return (
        <div className='lg:container mx-auto py-5'>
            <div className="navbar bg-base-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold text-orange-500">BrainyPlay</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <img src={profile} alt="User Profile" width={40} height={40} />
                    <a className="ml-5 btn bg-orange-500 hover:bg-orange-600 text-white">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;