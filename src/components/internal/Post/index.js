import React, { useState } from 'react';
import './post.css';
import ImgEdit from '../../../components/assets/edit-icon.png';
import ImgDelete from '../../../components/assets/delete-icon.png';
import postFetch from '../../../hooks/postFetch';
import Swal from 'sweetalert2';

const PostSindicate = (props) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(props.content);
  const [date, setDate] = useState(props.date);
  const [hour, setHour] = useState(props.hour);
  const [typeMessage, setTypeMessage] = useState(props.typeMessage);
  const [isAdm, setIsAdm] = useState(props.isAdm);

  function updatePost() {
    const postUpdated = {
      textContent: content,
      typeMessage: 'Importante'
    };

    postFetch
      .put(`/${props.id}`, postUpdated)
      .then((res) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Post atualizado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        setEditing(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <div className='mainCommunique'>
        {isAdm ? <div className='line'></div> : ''}
        <header>
          <input type='text' disabled defaultValue={props.date} />

          {isAdm ? (
            <>
              <div className='filter-container'>
            </div>
            </>

          ) : (
            ''
          )}
        </header>
        <div className='communiqueText'>
          <div>
            <h4 className='h4'>
              {isAdm ? (
                <span className='btnSpan'>
                  <button onClick={() => setEditing(true)}>
                    <img src={ImgEdit} />
                  </button>
                  <button onClick={() => props.funcaoDeletar(props.id)}>
                    <img src={ImgDelete} />
                  </button>
                </span>
              ) : (
                ''
              )}
            </h4>

            <textarea
              disabled={!editing}
              className={editing ? 'textAreaEnable' : 'textAreaDisabled'}
              onChange={(e) => setContent(e.target.value)}
            >
              {props.content}
            </textarea>

            <div className='typeAndHour'>
              <div>
                <button
                  disabled={!editing}
                  className={!editing ? 'btnSave' : 'btnSaveEnable'}
                  onClick={updatePost}
                >
                  Salvar
                </button>
                <div>
                  <span>{props.typeMessage}</span>
                  <span>{props.hour}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default PostSindicate;
