import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://silverstripe.flaviomartil.tech/api/send-email', { name, email, message });
            toast.success(response.data.message);
            clearForm();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response ? error.response.data.message : 'Ocorreu um erro ao enviar o email');
            } else {
                toast.error('Ocorreu um erro ao enviar o email');
            }
            clearForm();
        }
    };

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-box">
            <ToastContainer />
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-row">
                    <input
                        type="text"
                        placeholder="Nome*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <textarea
                    placeholder="Mensagem*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit">ENVIAR</button>
            </form>
        </div>
    );
};

export default ContactForm;