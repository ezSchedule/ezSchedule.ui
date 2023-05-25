import React from 'react'
import './configuration.css'
import Sidebar from '../../../components/internal/SideBar'
import { Link } from 'react-router-dom'

const Configuration = () => {
    return (
        <>
            <div className='mainConfiguraton'>
                <Sidebar />
            </div>
            <div className='configurationInside'>
                <div>
                    <h5> O que deseja ajustar?</h5>
                    <div className='btnConfig'>
                        <Link className='button' to="/personSettingsAdm">Meu perfil</Link>
                        <Link className='button' to="/condominiumSettings">Condominío</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Configuration