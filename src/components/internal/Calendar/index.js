import React, { useEffect, useState } from 'react';
import './calendar.css'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MiniModal from '../MiniModal';
import { useNavigate } from 'react-router-dom';

const MyCalendar = () => {
    const [day, setDay] = useState(new Date());
    const navigate = useNavigate();

    const [displayCalendar, setDisplayCalendar] = useState('flex');
    const [displayCanceled, setDisplayCanceled] = useState('none');
    const [indexCalendar, setIndexCalendar] = useState(true);
    const [indexCanceled, setIndexCanceled] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const calenderStyle = { display: displayCalendar }
    const canceledStyle = { display: displayCanceled }

    const listDate = [ new Date(2023, 5 - 1, 25) ];
    useEffect(() => {
        console.log(listDate[0].toLocaleDateString())
        console.log(day.toLocaleDateString())
        console.log(listDate[0].toLocaleDateString() === day.toLocaleDateString() ? "É igual" : "Não é igual");
    });

    function showContent(calendar, canceled) {
        setDisplayCalendar(calendar);
        setDisplayCanceled(canceled);
    }

    return (
        <div className='container-calendar'>
            <div style={calenderStyle} className='content-calendar'>
                <Calendar
                    onChange={setDay}
                    value={day}
                    minDate={new Date()}
                    onClickDay={() => setOpenModal(true)}
                    locale='pt-br' />
            </div>
            <div className='content-canceled' style={canceledStyle}></div>

            <div className='container-button' >
                <button
                    id={indexCalendar ? 'selected' : ''}
                    onClick={() => {
                        showContent('flex', 'none');
                        setIndexCalendar(true);
                        setIndexCanceled(false);
                    }}>
                    Calendário
                </button>
                <button
                    id={indexCanceled ? 'selected' : ''}
                    onClick={() => {
                        showContent('none', 'flex');
                        setIndexCalendar(false);
                        setIndexCanceled(true);
                    }}>
                    Cancelados
                </button>
                <button
                    onClick={() => navigate('/paymentAdm')}>
                    Agendados
                </button>
            </div>

            <MiniModal title="Cancelar dia" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
                <input className='input-mini-modal' placeholder='Motivo:' />
                <button className='button-mini-modal'>Cancelar</button>
            </MiniModal>
        </div>
    );
};

export default MyCalendar;