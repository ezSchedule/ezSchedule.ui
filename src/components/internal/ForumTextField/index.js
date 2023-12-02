import React, { useState } from 'react';
import './forumTextField.css';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../../hooks/firebase';

const ForumTextField = () => {
  const [typeMessageValue, setTypeMessageValue] = useState('');

  const [announcementColor, setAnnouncementColor] = useState('');
  const [urgentColor, setUrgentColor] = useState('');
  const [voteColor, setVoteColor] = useState('');

  function setToAnnouncement() {
    setAnnouncementColor('#5AE982');
    setUrgentColor('');
    setVoteColor('');
    setTypeMessageValue('Comunicado');
  }

  function setToUrgent() {
    setAnnouncementColor('');
    setUrgentColor('#5AE982');
    setVoteColor('');
    setTypeMessageValue('Urgente');
  }

  function setToVote() {
    setAnnouncementColor('');
    setUrgentColor('');
    setVoteColor('#5AE982');
    setTypeMessageValue('Votação');
  }

  function validate(e) {
    e.preventDefault();
    if (e.target.content.value === '') {
      modal('Campos em branco', 'Para realizar uma postagem no fórum é necessário preencher todos os campos.');
    } else if (typeMessageValue === '') {
      modal('Tipo de post em branco', 'Escolha o tipo de publicação que deseja postar!');
    } else {
      addNewPost(e);
    }
  }

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      textContent: e.target.content.value,
      typeMessage: typeMessageValue,
      condominium: { id: sessionStorage.CONDOMINIUM }
    };

    const postsRef = collection(firestore, `conversations-${sessionStorage.CONDOMINIUM}`);

    addDoc(postsRef, newPost)
      .then(() => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Post criado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  function modal(title, text) {
    Swal.fire({
      title: title,
      text: text,
      type: 'warning',
      confirmButtonColor: '#5AE982',
      confirmButtonText: 'Ok'
    });
  }

  return (
    <>
      <form onSubmit={validate} className='form'>
        <div className='textField'>
          <div className='textArea'>
            <textarea name='content' cols='30' rows='10' placeholder='Digite alguma coisa...'></textarea>
          </div>
          <div className='buttonsTextField'>
            <button type='button' style={{ backgroundColor: announcementColor }} onClick={setToAnnouncement}>
              Comunicado
            </button>
            <button type='button' style={{ backgroundColor: urgentColor }} onClick={setToUrgent}>
              Urgente
            </button>
          </div>
          <div className='btnPost'>
            <button type='submit'>Postar</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForumTextField;
