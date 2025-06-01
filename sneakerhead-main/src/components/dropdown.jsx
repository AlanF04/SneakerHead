
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faBars,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Drop.css';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                {isOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li>
                        <Link to ='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to ='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to ='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/product'>Products</Link>
                    </li>
                    <li>
                        <Link to='/wishlist'>WishList</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
