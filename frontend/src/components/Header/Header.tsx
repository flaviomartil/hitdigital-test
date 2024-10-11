import React from 'react';
import Image from 'next/image';
import './Header.css';

interface HeaderProps {
    pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <Image src="/images/logo.png" alt="Logo" className="logo-image" width={150} height={50} />
            </div>
        </div>
    );
};

export default Header;