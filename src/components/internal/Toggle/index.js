import React from "react";
import './toggle.css';
import userFetch from '../../../hooks/userFetch';
import { useNavigate } from "react-router-dom";

const Toggle = ({ isOpen }) => {
    const navigate = useNavigate();
    const token = sessionStorage.TOKEN;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    function logout() {
        userFetch.post(`/logout/${sessionStorage.EMAIL}`, config)
        .then(() => {
            sessionStorage.clear();
            navigate('/');
        })
        .catch((err) => {
            console.log(err)
        });
    }

    if (isOpen) {
        return (
            <div className="background-toggle">
                <span onClick={() => logout()}>Sair</span>
            </div>
        );
    }
    return false;
}

export default Toggle;