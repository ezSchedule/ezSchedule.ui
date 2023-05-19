import React from 'react';
import '../recoverPassword.css';
import CardRecover from '../../../components/internal/CardRecover';

const UpdatePassword = () => {
    return (
        <div className='mainBody'>
            <CardRecover title="Atualizar senha" locate="" back="/securityCode">
                <input type="password" placeholder='Senha' required />
                <input type="password" placeholder='Confirmação de senha' required />
            </CardRecover>
        </div>
    );
}

export default UpdatePassword;