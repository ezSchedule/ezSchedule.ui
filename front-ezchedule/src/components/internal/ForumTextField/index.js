import React from 'react'
import './forumTextField.css'
import axios from 'axios';
const ForumTextField = () => {
    const api = axios.create({
        baseURL: "https://64540d77e9ac46cedf368660.mockapi.io/crud/posts/"
    })

    function addNewPost(e) {
        e.preventDefault();
        console.log(e.target.title.value)
        console.log(e.target.content.value)

        const newPost = {
            title: e.target.title.value,
            content: e.target.content.value,

        }

        api.post('/', newPost)
            .then(() => {
                window.location = '/forumAdm'
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <>
            <form onSubmit={addNewPost}>
                <div className='textField'>
                    <div className='textArea'>
                        <input type="text" name='title' placeholder='Titulo' />
                        <textarea name="content" cols="30" rows="10" placeholder='Digite alguma coisa...'></textarea>
                    </div>
                    <div className='buttonsTextField'>
                        <button>Comunicado</button>
                        <button>Urgente</button>
                        <button>Votação</button>
                    </div>
                    <div className='btnPost'>
                        <button type='submit'>Postar</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ForumTextField;