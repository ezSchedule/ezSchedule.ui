
import './forumTenant.css'
import SidebarTenant from '../../../components/internal/SidebarTenant/SidebarTenant'
import HeaderInternal from '../../../components/internal/Header'
import ButtonsTypeOfCommunique from '../../../components/internal/ButtonsTypeOfCommunique'
import Communique from '../../../components/internal/Communique'
import React from 'react'
const ForumTenant = () => {
    return (
        <>
            <div className="main-forum-tenant">
                <SidebarTenant />
                <HeaderInternal text='Comunicados' />
            </div>
            <div className="forum-tenant">
                <div className='div-forum-tenant'>
                    <Communique isAdm={false}/>
                </div>
            </div>
        </>
    )
}

export default ForumTenant