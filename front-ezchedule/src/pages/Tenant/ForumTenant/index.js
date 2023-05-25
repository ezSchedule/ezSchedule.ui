import React from 'react'
import './forumTenant.css'
import SidebarTenant from '../../../components/internal/SidebarTenant/SidebarTenant';
import HeaderInternal from '../../../components/internal/Header';
import ComuniqueButtons from '../../../components/internal/ComuniqueButtons';
import Communique from '../../../components/internal/Communique';

const ForumTenant = () => {
    return (
        <>
            <div className="main-forum-tenant">
                <SidebarTenant />
                <HeaderInternal text='Comunicados' />
            </div>
            <div className='forum-tenant'>
                <ComuniqueButtons />

                <div className="comunique-text">
                    <Communique />
                </div>
            </div>
        </>
    )
}

export default ForumTenant