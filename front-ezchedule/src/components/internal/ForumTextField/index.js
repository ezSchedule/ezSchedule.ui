import React from 'react'
import './forumTextField.css'

const ForumTextField = () => {
    return (
        <>
            <div className='textField'>
                <div className='textArea'>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Digite alguma coisa...'></textarea>
                </div>
                <div className='buttonsTextField'>
                    <button>Comunicado</button>
                    <button>Urgente</button>
                    <button>Votação</button>
                </div>
                <div className='btnPost'>
                    <button>Postar</button>
                </div>
            </div>
        </>
    )
}

export default ForumTextField;