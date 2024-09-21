import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {

    const Link =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/listedbooks'>Listed Books</NavLink></li>
            <li><NavLink to='/page-to-read'>Pages to Read</NavLink></li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100 my-5">
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
                            {Link}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-success mr-3">Sign In</a>
                    <a className="btn btn-secondary">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;