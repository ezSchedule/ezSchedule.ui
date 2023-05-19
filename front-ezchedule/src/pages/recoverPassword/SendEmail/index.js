import React from 'react';
import '../recoverPassword.css';
import CardRecover from '../../../components/internal/CardRecover';

const SendEmail = () => {
    return (
        <div className='mainBody'>
            <CardRecover title="Recuperar Senha" locate="/securityCode" back="/login">
                <p>
                    Digite seu email para que possamos enviar um código de verificação de para recuperar sua senha
                </p>
                <input type="text" placeholder='Email' required />
            </CardRecover>
        </div>
    );
}

export default SendEmail;