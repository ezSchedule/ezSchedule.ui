import React from 'react'
import './configuration.css'
import Sidebar from '../../../components/internal/SideBar'
import HeaderInternal from '../../../components/internal/Header'
const Configuration = () => {
    return (
        <>
            <div className='mainConfiguraton'>
                <Sidebar />

            </div>
            <div className='configurationInside'>
                <div>
                    <h5>
                        O que deseja ajustar?
                    </h5>
                    <div className='btnConfig'>
                        <button>Meu Perfil</button>
                        <button>Condominío</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Configuration