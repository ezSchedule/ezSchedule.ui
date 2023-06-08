import React, { useEffect, useState } from 'react';
import './calendar.css'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MiniModal from '../MiniModal';
import { useNavigate } from 'react-router-dom';
import scheduleFetch from '../../../hooks/scheduleFetch';

const MyCalendar = () => {
    const [canceledList, setCanceledList] = useState([]);
    const [day, setDay] = useState(new Date());
    const navigate = useNavigate();

    const [displayCalendar, setDisplayCalendar] = useState('flex');
    const [displayCanceled, setDisplayCanceled] = useState('none');
    const [indexCalendar, setIndexCalendar] = useState(true);
    const [indexCanceled, setIndexCanceled] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const calenderStyle = { display: displayCalendar }
    const canceledStyle = { display: displayCanceled }

    const listDate = [new Date(2023, 5 - 1, 25)];
    useEffect(() => {
        console.log(listDate[0].toLocaleDateString())
        console.log(day.toLocaleDateString())
        console.log(listDate[0].toLocaleDateString() === day.toLocaleDateString() ? "É igual" : "Não é igual");

        scheduleFetch.get(`/type`)
            .then((res) => {
                setCanceledList(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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

            <div className='container-canceled' style={canceledStyle}>
                <div className='header-canceled'>
                    <div id='date' className='information-header-canceled'>Data</div>
                    <div id='cause' className='information-header-canceled'>Motivo</div>
                </div>
                <div className='body-canceled'>
                    <div className='content-body-canceled'>
                        <abbr id='body-date'>
                            12/12/2012
                        </abbr>
                        <abbr id='body-cause' title='O estilo da fonte pode variar de acordo com as letras escolhidas. Algumas fontes não aceitam caracteres especiais ou foram criadas para uma ação pontual. Através da imagem a seguir, é possível ver o conceito de cada letra. Além disso, você pode verificar a tipografia de todas as letras abaixo ou fazer o teste online antes de baixar a fonte.'>
                            O estilo da fonte pode variar de acordo com as letras escolhidas. Algumas fontes não aceitam caracteres especiais ou foram criadas para uma ação pontual. Através da imagem a seguir, é possível ver o conceito de cada letra. Além disso, você pode verificar a tipografia de todas as letras abaixo ou fazer o teste online antes de baixar a fonte.
                        </abbr>
                    </div>
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