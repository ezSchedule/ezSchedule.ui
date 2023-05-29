import React from "react";
import './toggle.css';
import userFetch from '../../../hooks/userFetch';
import { useNavigate } from "react-router-dom";

const Toggle = ({ isOpen }) => {
    const navigate = useNavigate();

    function logout() {
        userFetch.post(`/logout/${sessionStorage.EMAIL}`)
        .then(() => {
            sessionStorage.clear();
            navigate('/');
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