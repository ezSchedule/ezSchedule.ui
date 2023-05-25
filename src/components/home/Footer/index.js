import React from 'react';
import './footer.css';

const date = new Date();
const currentYear = date.getFullYear();
const Footer = () => {
    return (
        <div className='mainFooter'>
            <div>
                <p>@ Schedule CopyRight {currentYear}</p>
            </div>
        </div>
    )
}

export default Footer;