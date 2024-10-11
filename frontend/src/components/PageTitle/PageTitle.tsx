import React from 'react';
import './PageTitle.css';
interface PageTitleProps {
    name: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ name }) => {
    return (
        <div className="page-title-container">
            <span className="page-title-name">{name}</span>
            <div className="page-title-underline">
                <div className="page-title-underline-background"></div>
                <div className="page-title-underline-highlight"></div>
            </div>
        </div>
    );
};

export default PageTitle;