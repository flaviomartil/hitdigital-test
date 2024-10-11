'use client';

import React from 'react';
import Navbar from '@/components/NavBar/Navbar';
import Header from '@/components/Header/Header';
import './Layout.css';
import PageTitle from '@/components/PageTitle/PageTitle';

interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
    return (
        <div className="layout-container">
            <Header pageTitle={pageTitle} />
            <Navbar />
            <PageTitle name={pageTitle} />
            <main className="layout-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;