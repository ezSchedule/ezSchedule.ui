import React from 'react'
import './newService.css'
import Sidebar from '../../../components/internal/SideBar'
import HeaderInternal from '../../../components/internal/Header'
import ModalNewService from '../../../components/internal/ModalNewService'
const NewService = () => {
    return (
        <>
            <div className='mainNewService'>
                <Sidebar />
                <HeaderInternal text='Novo Serviço' />
            </div>
            <div className='newService'>
                <ModalNewService />
            </div>
        </>
    )
}

export default NewService