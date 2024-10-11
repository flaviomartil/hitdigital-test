'use client';

import React from 'react';
import Link from 'next/link';

type NavButtonProps = {
    text: string;
    href: string;
    className?: string;
};

const NavButton: React.FC<NavButtonProps> = ({ text, href, className }) => {
    return (
        <Link href={href} className={className}>
            {text}
        </Link>
    );
};

export default NavButton;