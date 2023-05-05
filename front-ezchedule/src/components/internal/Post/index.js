import React from 'react'
import './post.css'
import Filter from '../../assets/filter.png'
import { useState } from 'react'

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
                        <h4>{props.title}</h4>
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