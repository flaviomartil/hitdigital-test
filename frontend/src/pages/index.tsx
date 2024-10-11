import React from 'react';
import HomeForm from "@/components/HomeForm/HomeForm";

const IndexPage: React.FC = () => {
    return (
        <HomeForm />
    );
}

export async function getStaticProps() {
    return {
        props: {
            pageTitle: 'Introdução',
        },
    };
}
export default IndexPage;