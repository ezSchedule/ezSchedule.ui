import React from 'react'
import './post.css'
import Filter from '../../assets/filter.png'
import { useState } from 'react'
import ImgEdit from '../../../components/assets/edit-icon.png'
import ImgDelete from '../../../components/assets/delete-icon.png'


const PostSindicate = (props) => {
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
                            <span>{props.title}</span>
                            <span className='btnSpan'><button>
                                <img src={ImgEdit} /></button><button onClick={() => props.funcaoDeletar(props.id)}>
                                    <img src={ImgDelete} /></button></span></h4>
                        <p>{props.content}</p>
                        <div className='typeAndHour'>
                            <div>
                                <span>Comunicado</span>
                                <span>{props.hour}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostSindicate