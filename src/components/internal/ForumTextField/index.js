import React, { useState } from 'react'
import './forumTextField.css'
import Swal from 'sweetalert2';
import postFetch from '../../../hooks/postFetch';
const ForumTextField = () => {
    const [typeMessageValue, setTypeMessageValue] = useState();

    const [announcementColor, setAnnouncementColor] = useState(''); // Estado para controlar a cor do botão 'Comunicado'
    const [urgentColor, setUrgentColor] = useState(''); // Estado para controlar a cor do botão 'Urgente'
    const [voteColor, setVoteColor] = useState('');

    function setToAnnouncement() {
        setAnnouncementColor('#81ab8d');
        setUrgentColor('');
        setVoteColor('');
        setTypeMessageValue("Comunicado");
    }
    function setToUrgent() {
        setAnnouncementColor('');
        setUrgentColor('#81ab8d');
        setVoteColor('');
        setTypeMessageValue("Urgente");
    }
    function setToVote() {
        setAnnouncementColor('');
        setUrgentColor('');
        setVoteColor('#81ab8d');
        setTypeMessageValue("Votação");
    }


    function addNewPost(e) {
        e.preventDefault();

        const newPost = {
            textContent: e.target.content.value,
            typeMessage: typeMessageValue,
            condominium: {
                id: sessionStorage.CONDOMINIUM
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
        else if (typeMessageValue == null) {
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
                        <button type='button' style={{ backgroundColor: announcementColor }} onClick={setToAnnouncement}>Comunicado</button>
                        <button type='button' style={{ backgroundColor: urgentColor }} onClick={setToUrgent}>Urgente</button>
                        <button type='button' style={{ backgroundColor: voteColor }} onClick={setToVote}>Votação</button>
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