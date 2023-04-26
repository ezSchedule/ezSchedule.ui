import React from 'react';
import './settingsCondominium.css';

import HeaderInternal from '../../../components/internal/Header';
import Sidebar from '../../../components/internal/SideBar';
import ColumnSettingsCondominium from '../../../components/internal/ColumnSettingsCondominium';

const CondominiumSettings = () => {
    return (
        <>
            <div className='mainSettingsCondominium'>
                <Sidebar />
                <HeaderInternal text="Ajustes" />
            </div>
            <div className='settingsCondominiumInside'>
                <ColumnSettingsCondominium name="Vinicius Nunes" />
            </div>
        </>
    );
}

export default CondominiumSettings;