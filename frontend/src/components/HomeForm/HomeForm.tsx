import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import './HomeForm.css';

const HomeForm: React.FC = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchText = async () => {
            try {
                const response = await axios.get('https://silverstripe.flaviomartil.tech/api/about-us');
                const data = response.data;
                setContent(data.Content);
            } catch (error) {
                console.error('Erro ao buscar o texto:', error);
            }
        };

        fetchText();
    }, []);

    return (
        <div className="home-box">
            <div className="home-form">
                <div className="content-container typography">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default HomeForm;