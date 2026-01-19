import React from 'react'
import "../styles/Navbar.css";
import logo from "../assets/cara.png";
import { useState } from 'react';
import BestSellers from './BestSellers';
import GiftSets from './GiftSets';
import Body from './Body';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    // Access the total quantity from the cart state
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    // Refactored: Single state to track the active dropdown menu
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseOver = (menuName) => {
        setActiveDropdown(menuName);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div>
            <header className="banner" role="banner">
                <nav className="navbar" role="navigation" aria-label="menu">

                    <Link to="/">
                        <img src={logo} className=" ml-32" alt="logo" />
                    </Link>

                    <ul className="menuNav">
                        {/* BEST SELLERS Dropdown */}
                        <li 
                            className="dropdown nav-link nav-link-fade-up transition-all duration-700" 
                            onMouseOver={() => handleMouseOver('bestSellers')}
                        >
                            BEST SELLERS
                            {activeDropdown === 'bestSellers' && (
                                <ul className="dropdown-nav" onMouseLeave={handleMouseLeave}>
                                    <BestSellers />
                                </ul>
                            )}
                        </li>

                        {/* GIFT SETS Dropdown */}
                        <li 
                            className="dropdown nav-link nav-link-fade-up" 
                            onMouseOver={() => handleMouseOver('giftSets')}
                        >
                            GIFT SETS
                            {activeDropdown === 'giftSets' && (
                                <ul className="dropdown-nav dropdown-nav2" onMouseLeave={handleMouseLeave}>
                                    <GiftSets />
                                </ul>
                            )}
                        </li>

                        {/* SHOP RANGE Dropdown */}
                        <li 
                            className="dropdown nav-link nav-link-fade-up" 
                            onMouseOver={() => handleMouseOver('shopRange')}
                        >
                            SHOP RANGE
                            {activeDropdown === 'shopRange' && (
                                <ul className="dropdown-nav dropdown-nav3" onMouseLeave={handleMouseLeave}>
                                    <Body />
                                </ul>
                            )}
                        </li>

                        <p className='navLine absolute bg-red-600 w-1 font-extralight h-9 z-50'></p>
                    </ul>

                    <Link to="/cart" className="relative flex items-center">
                        <FaShoppingBag className='text-2xl text-right ml-10 relative left-24' />
                        {cartQuantity > 0 && (
                            <span className="absolute top-[-10px] right-[-15px] bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full left-[115px] z-50">
                                {cartQuantity}
                            </span>
                        )}
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;