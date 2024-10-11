'use client';

import React from 'react';
import NavButton from '../NavButton/NavButton';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <div className="navbar-buttons">
            <NavButton text="INTRODUÇÃO" href="/" className="nav-button" />
            <NavButton text="CONTATO" href="/contact" className="nav-button" />
        </div>
    );
};

export default Navbar;