import React, { useState } from 'react'
import './forumTextField.css'
import Swal from 'sweetalert2';
import postFetch from '../../../hooks/postFetch';
const ForumTextField = () => {
    const [typeMessageValue, setTypeMessageValue] = useState();

    function setToAnnouncement() {
        setTypeMessageValue("Comunicado");
    }
    function setToUrgent() {
        setTypeMessageValue("Urgente");
    }
    function setToVote() {
        setTypeMessageValue("Votação");
    }


    function addNewPost(e) {
        e.preventDefault();

        const newPost = {
            textContent: e.target.content.value,
            typeMessage: typeMessageValue,
            condominium: {
                id: sessionStorage.ID
            }
        }

        if (e.target.content.value == "") {
            Swal.fire({
                title: "Campos em branco!",
                text: "Para realizar uma postagem no forum é necessario preencher todos os campos.",
                type: "warning",
                confirmButtonColor: "#5AE982",
                confirmButtonText: "ok",
            })
        }
        else if(typeMessageValue == null){
            Swal.fire({
                title: "Tipo de post em branco",
                text: "Escolha o tipo de publição deseja postar!",
                type: "warning",
                confirmButtonColor: "#5AE982",
                confirmButtonText: "ok",
            })
        }
        else {
            postFetch.post('', newPost)
                .then(() => {
                    window.location.reload(false);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <>
            <form onSubmit={addNewPost} className='form'>
                <div className='textField'>
                    <div className='textArea'>
                        <textarea name="content" cols="30" rows="10" placeholder='Digite alguma coisa...'></textarea>
                    </div>
                    <div className='buttonsTextField'>
                        <button type='button' onClick={setToAnnouncement}>Comunicado</button>
                        <button type='button' onClick={setToUrgent}>Urgente</button>
                        <button type='button' onClick={setToVote}>Votação</button>
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