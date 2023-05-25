import React from 'react'
import './forum.css'
import Sidebar from '../../../components/internal/SideBar'
import HeaderInternal from '../../../components/internal/Header'
import ForumTextField from '../../../components/internal/ForumTextField'
import Communique from '../../../components/internal/Communique'

const Forum = () => {
    return (
        <>
            <div className='mainForum'>
                <Sidebar />
                <HeaderInternal text="Postar" />
            </div>
            <div className='forum'>
                <div className='forumDiv'>
                    <ForumTextField />
                    <Communique />
                </div>
            </div>
        </>
    )
}

export default Forum;