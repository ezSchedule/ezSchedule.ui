import React from 'react'
import './forumTextField.css'
import axios from 'axios';
import Swal from 'sweetalert2';
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

        if (e.target.title.value == "" || e.target.content.value == "") {
            Swal.fire({
                title: "Campos em branco!",
                text: "Para realizar uma postagem no forum é necessario preencher todos os campos.",
                type: "warning",
                confirmButtonColor: "#5AE982",
                confirmButtonText: "ok",
            })
        }
        else {
            api.post('/', newPost)
                .then(() => {
                    window.location = '/forumAdm'
                })
                .catch((err) => {
                    alert(err)
                })
        }
    }

    return (
        <>
            <form onSubmit={addNewPost} className='form'>
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