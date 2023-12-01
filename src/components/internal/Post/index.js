import React, { useState, useEffect } from 'react';
import './post.css';
import ImgEdit from '../../../components/assets/edit-icon.png';
import ImgDelete from '../../../components/assets/delete-icon.png';
import { doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { firestore } from '../../../hooks/firebase';

const PostSindicate = (props) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(props.content);
  const [date, setDate] = useState(props.date);
  // const formattedDate = props.date.toDate().toLocaleDateString();
  const [typeMessage, setTypeMessage] = useState(props.typeMessage);
  const [isAdm, setIsAdm] = useState(props.isAdm);

  useEffect(() => {
    setContent(props.content);
    setDate(props.date);
    setTypeMessage(props.typeMessage);
    setIsAdm(props.isAdm);
  }, [props.content, props.date, props.typeMessage, props.isAdm]);

  function updatePost() {
    const postRef = doc(firestore, `conversations-${sessionStorage.CONDOMINIUM}`, props.id);

    updateDoc(postRef, {
      textContent: content,
      typeMessage: typeMessage
    })
      .then(() => {
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
          {/* <input type='text' disabled defaultValue={formattedDate} /> */}

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
                  {/* <span>{formattedDate}</span> */}
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
