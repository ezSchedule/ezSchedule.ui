import React from 'react'
import './buttonsTypeOfCommunique.css'
import { useState } from 'react';
const ButtonsTypeOfCommunique = () => {
    const [announcementColor, setAnnouncementColor] = useState('');
    const [urgentColor, setUrgentColor] = useState('');
    const [voteColor, setVoteColor] = useState('');

    const setToAnnouncement = () => {
        setAnnouncementColor('#5AE982'); 
        setUrgentColor('');
        setVoteColor('');
    };

    const setToUrgent = () => {
        setAnnouncementColor('');
        setUrgentColor('#5AE982');
        setVoteColor('');
    };

    const setToVote = () => {
        setAnnouncementColor('');
        setUrgentColor('');
        setVoteColor('#5AE982');
    };
    return (
        <>
            <div className='btn-type-comunique'>
                <button style={{ backgroundColor: announcementColor }} onClick={setToAnnouncement}>Comuicado</button>
                <button style={{ backgroundColor: urgentColor }} onClick={setToUrgent}>Urgente</button>
                <button style={{ backgroundColor: voteColor }} onClick={setToVote}>Votação</button>
            </div>
        </>
    )
}

export default ButtonsTypeOfCommunique