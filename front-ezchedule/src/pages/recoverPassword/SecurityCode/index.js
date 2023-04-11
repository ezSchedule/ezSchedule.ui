import React from 'react';
import './securityCode.css';
import { Link } from 'react-router-dom';

const SecurityCode = () => {
    return (
        <div className='mainBody'>
            <form className='formSecurityCode'>
                <div className='container'>
                    <h1>Recuperar Senha</h1>
                    <p>Código de verificação enviado! Por favor, digite a sequência numérica recebida na sua caixa de email.</p>
                    <div className='containerBottom'>
                        <input type="text" placeholder='Código de verificação' required />
                        <Link to="/updatePassword" className='button'>Confirmar</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SecurityCode;