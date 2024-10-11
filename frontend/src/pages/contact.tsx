import React from 'react';
import ContactForm from '@/components/ContactForm/ContactForm';

const ContactPage: React.FC = () => {
    return (
        <ContactForm />
    );
};

export async function getStaticProps() {
    return {
        props: {
            pageTitle: 'Contato',
        },
    };
}

export default ContactPage;