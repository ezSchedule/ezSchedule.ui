import React from 'react';
import './updatePassword.css'
import { Link } from 'react-router-dom';
import onBackPressed from '../../../components/assets/left-arrow.png';

const UpdatePassword = () => {
    return (
        <div className='mainBody'>
            <form className='formUpdatePassword'>
                <div className='imageContainer'>
                    <Link className='onBack' to="/securityCode">
                        <img src={onBackPressed} />
                    </Link>
                </div>
                <div className='container'>
                    <h1>Atualizar senha</h1>
                    <div className='containerBottom'>
                        <input type="password" placeholder='Senha' required />
                        <input type="password" placeholder='Confirmação de senha' required />
                        <Link to="/securityCode" className='button'>Confirmar</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UpdatePassword;