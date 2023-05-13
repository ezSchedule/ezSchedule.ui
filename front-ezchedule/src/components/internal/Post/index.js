import React from 'react'
import './post.css'
import Filter from '../../assets/filter.png'
import { useState } from 'react'
import ImgEdit from '../../../components/assets/edit-icon.png'
import ImgDelete from '../../../components/assets/delete-icon.png'
import axios from 'axios'
import Swal from 'sweetalert2'
const PostSindicate = (props) => {
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState(props.content);
    const [date, setDate] = useState(props.date)
    const [hour, setHour] = useState(props.hour);
    const [title, setTitle] = useState(props.title);

    function updatePost() {
        const postUpdated = {
            content,
            title
        };

        axios.put(`https://64540d77e9ac46cedf368660.mockapi.io/crud/posts/${props.id}`, postUpdated)
            .then((res) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Post atualizado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setEditing(false);
            })
            .catch((err) => {
                alert(err);
            })

    }
    return (
        <>
            <div className='mainCommunique'>
                <div className='line'></div>
                <header>
                    <input type="text" disabled value={props.date} />
                    <img src={Filter} alt="" />
                </header>
                <div className='communiqueText'>
                    <div>
                        <h4 className='h4'>
                            <span onChange={(e) => setTitle(e.target.value)}>{props.title}</span>
                            <span className='btnSpan'>
                                <button onClick={() => setEditing(true)}>
                                    <img src={ImgEdit} />
                                </button>
                                <button onClick={() => props.funcaoDeletar(props.id)}>
                                    <img src={ImgDelete} />
                                </button>
                            </span>
                        </h4>
                        <textarea disabled={!editing}
                            className={editing ? "textAreaEnable"
                                : "textAreaDisabled"}
                            onChange={(e) => setContent(e.target.value)}
                        >{props.content}</textarea>
                        <div className='typeAndHour'>
                            <div>
                                <button disabled={editing==false} className={!editing ? "btnSave"
                                :"btnSaveEnable"} onClick={updatePost}>Salvar</button>
                                <div>
                                    <span>Comunicado</span>
                                    <span>{props.hour}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostSindicate