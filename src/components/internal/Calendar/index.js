import React, { useEffect, useState } from 'react';
import './calendar.css'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MiniModal from '../MiniModal';

const MyCalendar = () => {
    const [day, setDay] = useState(new Date());
    const [displayCalendar, setDisplayCalendar] = useState('flex');
    const [displaySchedules, setDisplaySchedule] = useState('none');
    const [displayCanceled, setDisplayCanceled] = useState('none');

    const [openModal, setOpenModal] = useState(false);

    const calenderStyle = { display: displayCalendar }
    const scheduleStyle = { display: displaySchedules }
    const canceledStyle = { display: displayCanceled }

    const listDate = [
        new Date(2023, 5 - 1, 25)
    ];

    useEffect(() => {
        console.log(listDate[0].toLocaleDateString())
        console.log(day.toLocaleDateString())
        console.log(listDate[0].toLocaleDateString() == day.toLocaleDateString() ? "É igual" : "Não é igual");
    });

    function showContent(calendar, schedule, canceled) {
        setDisplayCalendar(calendar);
        setDisplaySchedule(schedule);
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
            <div className='content-schedules' style={scheduleStyle}></div>
            <div className='content-canceled' style={canceledStyle}></div>

            <div className='container-button' >
                <button onClick={() => showContent('flex', 'none', 'none')}>Calendário</button>
                <button onClick={() => showContent('none', 'flex', 'none')}>Agendados</button>
                <button onClick={() => showContent('none', 'none', 'flex')}>Cancelados</button>
            </div>

            <MiniModal title="Cancelar dia" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
                <input className='input-mini-modal' placeholder='Motivo:' />
                <button className='button-mini-modal'>Cancelar</button>
            </MiniModal>
        </div>
    );
};

export default MyCalendar;