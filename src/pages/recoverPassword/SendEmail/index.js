import React, { useState } from 'react';
import '../recoverPassword.css';
import CardRecover from '../../../components/internal/CardRecover';
import userFetch from '../../../hooks/userFetch';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import VLibras from '../../../components/internal/Vlibras';

const SendEmail = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    sessionStorage.EMAIL = email;

    function validateField() {
        if (email === undefined || email === "") modal("O campo não pode estar vazio!"); 
        else if (email.indexOf("@") === -1) modal("O email precisa estar neste formato: nome@dominio.com"); 
        else sendToEmail();
    }

    function sendToEmail() {
        userFetch.get(`/recovery-password/${email}`)
            .then(() => {
                navigate("/securityCode");
            })
            .catch((err) => {
                if (err.response.status === 404) modal("Email não encontrado!");
            });
    }

    function modal(text) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: text,
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <>
        <VLibras />
            <div className='mainBody'>
                <CardRecover title="Recuperar Senha" action={validateField} back="/login">
                    <p>
                        Digite seu email para que possamos enviar um código de verificação de para recuperar sua senha
                    </p>
                    <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                </CardRecover>
            </div>
        </>
    );
}

export default SendEmail;