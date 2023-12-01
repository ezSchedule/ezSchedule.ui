import React, { useState } from 'react';
import '../recoverPassword.css';
import CardRecover from '../../../components/internal/CardRecover';
import userFetch from '../../../hooks/userFetch';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [confirm, setConfirm] = useState();

    const info = {
        email: sessionStorage.EMAIL,
        password: password,
        newPassword: confirm
    }

    function validateField() {
        if (password === undefined || password === "") modal("O campo senha não pode estar vazio!");
        else if (confirm === undefined || confirm === "") modal("O campo confirmar senha não pode estar vazio!");
        else if (password !== confirm) modal("A senha e a confimação precisam ser iguais!");
        else sendNewPassword();
    }

    function sendNewPassword() {
        userFetch.put(`/forgot-password`, info)
            .then(() => {
                sessionStorage.removeItem("EMAIL");
                modalSuccess("Senha alterada com sucesso!");
                setInterval(navigate("/login"), 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function modalSuccess(text) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: text,
            showConfirmButton: false,
            timer: 1500
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
            <div className='mainBody'>
                <CardRecover title="Atualizar senha" action={validateField} back="/securityCode">
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" placeholder='Confirmação de senha' onChange={(e) => setConfirm(e.target.value)} required />
                </CardRecover>
            </div>
        </>
    );
}

export default UpdatePassword;