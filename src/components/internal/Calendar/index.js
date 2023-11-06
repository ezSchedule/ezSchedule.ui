import React, { useEffect, useState } from 'react';
import './calendar.css'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MiniModal from '../MiniModal';
import { useNavigate } from 'react-router-dom';
import scheduleFetch from '../../../hooks/scheduleFetch';
import Swal from 'sweetalert2';
import deleteIcon from '../../assets/delete-icon.png';

const MyCalendar = () => {
    const navigate = useNavigate();

    const [canceledList, setCanceledList] = useState([]);
    const [day, setDay] = useState(new Date());
    const [cause, setCause] = useState('');

    const [displayCalendar, setDisplayCalendar] = useState('flex');
    const [displayCanceled, setDisplayCanceled] = useState('none');
    const [indexCalendar, setIndexCalendar] = useState(true);
    const [indexCanceled, setIndexCanceled] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const calenderStyle = { display: displayCalendar }
    const canceledStyle = { display: displayCanceled }

    useEffect(() => {
        scheduleFetch.get(`/type`)
            .then((res) => {
                setCanceledList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function showContent(calendar, canceled) {
        setDisplayCalendar(calendar);
        setDisplayCanceled(canceled);
    }

    function cancelDay() {
        const cancel = { nameEvent: cause, totalNumberGuests: 0, dateEvent: day.toISOString(), isCanceled: 1 };

        scheduleFetch.post(``, cancel)
            .then(() => {
                modal("Dia cancelado com sucesso!")
                setInterval(() => window.location.reload(false), 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function deleteCancelDay(id) {
        scheduleFetch.delete(`/delete/${id}`)
            .then(() => {
                setCanceledList(canceledList.filter(canceled => canceled.id !== id))
            })
            .catch((err) => console.log(err))
    }

    function modal(text) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: text,
            showConfirmButton: false,
            timer: 2000
        });
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

            <div className='container-canceled' style={canceledStyle}>
                <div className='header-canceled'>
                    <div id='date' className='information-header-canceled'>Data</div>
                    <div id='cause' className='information-header-canceled'>Motivo</div>
                </div>
                <div className='body-canceled'>
                    {
                        canceledList ?
                            canceledList.map(
                                (canceled) => (
                                    <div className='content-body-canceled' key={canceled.id}>
                                        <abbr id='body-date'> {canceled.dateEvent} </abbr>
                                        <abbr 
                                            id='body-cause'
                                            title={canceled.nameEvent != "" ? canceled.nameEvent : "Cancelamento cadastrado sem motivo."}>
                                            {canceled.nameEvent != "" ? canceled.nameEvent : "Cancelamento cadastrado sem motivo."}
                                        </abbr>
                                        <img src={deleteIcon} width={20} onClick={() => deleteCancelDay(canceled.id)} />
                                    </div>
                                )
                            )
                            :
                            <div className='content-body-canceled'>
                                <abbr id='body-date'> Sem data. </abbr>
                                <abbr id='body-cause' title='Nenhum dia está cancelado!'> Nenhum dia está cancelado! </abbr>
                            </div>
                    }
                </div>
            </div>

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
                    Datas canceladas
                </button>
            </div>

            <MiniModal title="Cancelar dia" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
                <input className='input-mini-modal' maxLength={100} placeholder='Motivo:' onChange={(e) => setCause(e.target.value)} />
                <button className='button-mini-modal' onClick={() => cancelDay()}>Cancelar</button>
            </MiniModal>
        </div>
    );
};

export default MyCalendar;