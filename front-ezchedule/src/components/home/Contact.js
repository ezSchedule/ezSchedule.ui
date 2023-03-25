import React from 'react';
import GitHub from '../assets/github.png';
import Envelop from '../assets/email.png';
import Location from '../assets/localizacao.png';
import './Contact.css'
const Contact = () => {
    return (
        <div className='mainContact'>
            <div className='contact'>
                <h1>Entre em contato conosco!</h1>
                <div className='imgContact'>
                    <img src={Envelop} alt="" />
                    <img src={GitHub} alt="" />
                    <img src={Location} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact