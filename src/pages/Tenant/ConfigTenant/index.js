import React from 'react'
import './configTenant.css'
import HeaderInternal from '../../../components/internal/Header';
import ColumSettings from '../../../components/internal/ColumSettings';
import SidebarTenant from '../../../components/internal/SidebarTenant/SidebarTenant';
const ConfigTenant = () => {
    const name = sessionStorage.NAME;

    return (
        <>
            <div className='main-person-settings'>
                <SidebarTenant />
                <HeaderInternal text="Ajustes" />
            </div>
            <div className='person-settings-inside'>
                <ColumSettings name={name} />
            </div>
        </>
    )
}

export default ConfigTenant;