import React from 'react';
import './settingsCondominium.css';

import HeaderInternal from '../../../components/internal/Header';
import Sidebar from '../../../components/internal/SideBar';
import ColumnSettingsCondominium from '../../../components/internal/ColumnSettingsCondominium';
import { Link, useNavigate } from 'react-router-dom';

const CondominiumSettings = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='mainSettingsCondominium'>
                <Sidebar />
                <HeaderInternal text="Ajustes" />
            </div>
            <div className='settingsCondominiumInside'>
                <ColumnSettingsCondominium name="Vinicius Nunes" />
                <button id='cancel' onClick={() => navigate('/configurationAdm') } >
                    <Link to="/configurationAdm" style={{ color: "#000" }}>Voltar</Link>
                </button>
            </div>
        </>
    );
}

export default CondominiumSettings;