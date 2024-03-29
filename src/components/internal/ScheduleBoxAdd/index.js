import React, { useState, useEffect } from 'react';
import './scheduleBoxAdd.css';
import ModalPamyment from '../ModalPayment';
import PIX from 'react-qrcode-pix';
import imgAdd from '../../assets/+.png';
import Swal from 'sweetalert2';
import salonsFetch from '../../../hooks/salonsFetch';
import scheduleFetch from '../../../hooks/scheduleFetch';

const ScheduleBoxAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [minimalPIX, setMinimalPIX] = useState('');
  const [fullPIX, setFullPIX] = useState('');
  const [salons, setSalons] = useState([]);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(59);

  //variables needed to create the object
  const [eventName, setEventName] = useState();
  const [eventType, setEventType] = useState();
  const [eventeDate, setEventDate] = useState();
  const [salon, setSalon] = useState();
  const [amountOfGuests, setAmountOfGuests] = useState();
  const [details, setDetails] = useState();
  const [selectTypePaymennt, setSelectTypePaymennt] = useState();
  const [saloonPrice, setSaloonPrice] = useState(null);
  const [test, setTest] = useState();

  useEffect(() => {
    let intervalId = null;
    if (openModal4) {
      intervalId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          setOpenModal4(false);
          window.location.reload(false);
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [openModal4, minutes, seconds]);

  useEffect(() => {
    salonsFetch
      .get('')
      .then((response) => {
        console.log(response.data);
        setSalons(response.data);
        const price = response.data[0].saloonPrice;
        setSaloonPrice(price);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(salons);
  }, []);

  const newSchedule = {
    nameEvent: eventName,
    typeEvent: eventType,
    dateEvent: '2019-01-21T06:47:22.756',
    totalNumberGuests: amountOfGuests,
    saloon: {
      id: salon,
    },
    tenant: {
      id: sessionStorage.ID,
    },
  };

  function modal(text) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  function closeModal() {
    if (eventName == null || eventType == null || eventeDate == null) {
      modal('Preencha todos os campos');
      return;
    } else {
      setOpenModal(false);
      setOpenModal2(true);
    }
  }

  function closeModal2() {
    if (amountOfGuests == null) {
      return modal('Digite o total de convidados');
    } else {
      setOpenModal2(false);
      setOpenModal3(true);
    }
  }

  const closeModal3 = (buttonTypePayment) => {
    setSelectTypePaymennt(buttonTypePayment);
  };

  function openPayment() {
    setOpenModal3(false);
    scheduleFetch
      .post('', newSchedule)
      .then(() => { })
      .catch((err) => {
        console.log(err);
      });

    if (selectTypePaymennt === 'pix') {
      return setOpenModal4(true);
    }
    return alert('Quando clicar aqui vai ser o paypal.');
  }

  function closeModal4() {
    setOpenModal4(false);
  }

  return (
    <>
      <div className="scheduleBoxAddMain">
        <button onClick={() => setOpenModal(!openModal)}>
          <img src={imgAdd} alt="" />
        </button>
      </div>
      <ModalPamyment
        title="Nova Data"
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      >
        <div className="container-list-tenant">
          <div className="inputs-modal">
            <input
              type="text"
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Nome do Evento"
            />
            <input
              onChange={(e) => setEventType(e.target.value)}
              placeholder="Tipo de Evento"
            />
            <input
              type="date"
              onChange={(e) => setEventDate(e.target.value)}
              placeholder="Data do Evento"
            />
            <select onChange={(e) => setSalon(e.target.value)}>
              <option value="">Escolher Salão</option>
              {
                salons ?
                  salons.map((salon) => (
                    <option key={salon.id} value={salon.id}>
                      {salon.saloonName}
                    </option>
                  ))
                  :
                  <option disabled>
                    Não há salões cadastrados.
                  </option>
              }
            </select>
          </div>
        </div>
        <button className="btn-continue" onClick={closeModal}>
          Continuar
        </button>
      </ModalPamyment>

      <ModalPamyment
        title="Nova Data"
        isOpen={openModal2}
        setModalOpen={() => setOpenModal(!openModal2)}
      >
        <div className="container-list-tenant">
          <div className="inputs-modal">
            <input
              type="number"
              min={0}
              onChange={(e) => setAmountOfGuests(e.target.value)}
              placeholder="Digite o total de convidados"
            />
            <input
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Deseja adicionar mais detalhes? (opcional)"
            />
            <div className="final-price">
              <span>Valor:</span>
              <span>R$ {saloonPrice}</span>
            </div>
          </div>
        </div>
        <button className="btn-continue" onClick={closeModal2}>
          Agendar
        </button>
      </ModalPamyment>

      <ModalPamyment
        title="Pagamento"
        isOpen={openModal3}
        setModalOpen={() => setOpenModal3(!openModal3)}
      >
        <div className="container-list-tenant">
          <div className="inputs-modal">
            <div
              className="inputs-payment-choice"
              style={{ backgroundColor: selectTypePaymennt === 'paypal' ? '#C6F7D3' : '' }}
              onClick={() => closeModal3('paypal')}
            >
              <span>Paypal</span>
              <span> &gt;</span>
            </div>
            <div
              className="inputs-payment-choice"
              style={{ backgroundColor: selectTypePaymennt === 'pix' ? '#C6F7D3' : '' }}
              onClick={() => closeModal3('pix')}
            >
              <span>Pix</span>
              <span> &gt;</span>
            </div>
            <div className="final-price">
              <span>Valor:</span>
              <span>R$ {saloonPrice}</span>
            </div>
          </div>
        </div>
        <button className="btn-continue" onClick={openPayment}>
          Continuar
        </button>
      </ModalPamyment>
      <ModalPamyment title="Pix" isOpen={openModal4} setModalOpen={() => setOpenModal3(!openModal4)}>
        <div className='container-payment-pix'>
          <PIX
            pixkey="44717959884"
            merchant="Vinicius A Nunes"
            city="São Paulo, Sp"
            onLoad={setMinimalPIX}
            amount={0.01}
          />
          <div>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
          <p className='text-pix-code'>
            Escaneie o Qr Code ou utilize a chave pix para realizar o pagamento.
          </p>
          <input type="text" className='pix-final-code' value={minimalPIX} />
          <div className='pix-final-value'>
            <span>Valor</span> <span>R$ {saloonPrice}</span>
          </div>
          <button className='btn-cancel' onClick={closeModal4}>Cancelar</button>
        </div>
      </ModalPamyment>
    </>
  );
};

export default ScheduleBoxAdd;
