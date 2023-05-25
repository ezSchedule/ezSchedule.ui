import React, { useState } from 'react';
import '../recoverPassword.css';
import CardRecover from '../../../components/internal/CardRecover';
import userFetch from '../../../hooks/userFetch';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SecurityCode = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState();

    function validateField() {
        if (token == undefined || token == "") modal("O campo não pode estar vazio!");
        else verifyToken();
    }

    function verifyToken() {
        userFetch.get(`/input-token/${token}`)
            .then(() => {
                navigate("/updatePassword");
            })
            .catch((err) => {
                if (err.response.status === 404) modal("Token inválido!");
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
        <div className='mainBody'>
            <CardRecover title="Recuperar Senha" action={validateField} back="/sendEmail">
                <p>
                    Código de verificação enviado! Por favor digite s sequência númerica recebida na sua caixa de email.
                </p>
                <input type="text" placeholder='Código de verificação' onChange={(e) => setToken(e.target.value)} required />
            </CardRecover>
        </div>
    );
}

export default SecurityCode;