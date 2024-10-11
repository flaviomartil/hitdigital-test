import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import '../styles/Main.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const pageTitle = pageProps.pageTitle;

    return (
        <Layout pageTitle={pageTitle}>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;