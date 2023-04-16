import React from 'react';
import './sendEmail.css'
import { Link } from 'react-router-dom';
import onBackPressed from '../../../components/assets/left-arrow.png';

const SendEmail = () => {
    return (
        <div className='mainBody'>
            <form className='formSendEmail'>
                <div className='imageContainer'>
                    <Link className='onBack' to="/login">
                        <img src={onBackPressed} />
                    </Link>
                </div>
                <div className='container'>
                    <h1>Recuperar Senha</h1>
                    <p>Digite seu email para que possamos enviar um código de verificação para recuperar sua senha.</p>
                    <div className='containerBottom'>
                        <input type="text" placeholder='Email' required />
                        <Link to="/securityCode" className='button'>Confirmar</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SendEmail;