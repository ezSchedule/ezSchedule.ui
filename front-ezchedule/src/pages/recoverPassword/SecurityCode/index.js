import React from 'react';
import '../recoverPassword.css';
import CardRecover from '../../../components/internal/CardRecover';

const SecurityCode = () => {
    return (
        <div className='mainBody'>
            <CardRecover title="Recuperar Senha" locate="/updatePassword" back="/sendEmail">
                <p>
                    Código de verificação enviado! Por favor digite s sequência númerica recebida na sua caixa de email.
                </p>
                <input type="text" placeholder='Código de verificação' required />
            </CardRecover>
        </div>
    );
}

export default SecurityCode;