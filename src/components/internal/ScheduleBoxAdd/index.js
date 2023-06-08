import React from 'react'
import './scheduleBoxAdd.css'
import { useState, useEffect } from 'react'
import ModalPamyment from '../ModalPayment'
import PIX from 'react-qrcode-pix'
import imgAdd from '../../assets/+.png'
import Swal from 'sweetalert2';
import salonsFetch from '../../../hooks/salonsFetch'

const ScheduleBoxAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [minimalPIX, setMinimalPIX] = useState("");
  const [fullPIX, setFullPIX] = useState("");
  const [salons, setSalons] = useState([]);


  //variables needed to create the object
  const [eventName, setEventName] = useState();
  const [eventType, setEventType] = useState();
  const [eventeDate, setEventDate] = useState();
  const [salon, setSalon] = useState();
  const [amountOfGuests, setAmountOfGuests] = useState();
  const [details, setDetails] = useState();
  const [selectTypePaymennt, setSelectTypePaymennt] = useState();

  useEffect(() => {
    salonsFetch.get('')
      .then((response) => {
        console.log(response.data)
        setSalons(response.data)
      }).catch((err) => {
        console.log(err);
      });
    console.log(salons)
  }, [])


  function modal(text) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  function closeModal() {

    if (eventName == null || eventType == null || eventeDate == null) {
      modal('Preencha todos os campos')
      return;
    }
    else {
      setOpenModal(false);
      setOpenModal2(true);
    }
  }
  function closeModal2() {
    if (amountOfGuests == null) {
      return modal('Digite o total de convidados');
    }
    else {
      setOpenModal2(false);
      setOpenModal3(true);
    }
  }
  const closeModal3 = (buttonTypePayment) => {
    setSelectTypePaymennt(buttonTypePayment)
  }

  function openPayment() {
    setOpenModal3(false);

    if (selectTypePaymennt === 'pix') {
      return setOpenModal4(true);
    }
    return alert('Quando clicar aqui vai ser o paypal.')
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
      <ModalPamyment title="Nova Data" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div className='container-list-tenant'>
          <div className='inputs-modal'>
            <input type="text"
              onChange={(e) => setEventName(e.target.value)}
              placeholder='Nome do Evento' />
            <select onChange={(e) => setEventType(e.target.value)}>
              <option value="Tipo do Evento">Tipo do Evento</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <input type="date"
              onChange={(e) => setEventDate(e.target.value)}
              placeholder='Data do Evento' />
            <select onChange={(e) => setSalon(e.target.value)}>
              <option value="">Escolher Salão</option>
              {salons.map((salon) => (
                <option key={salon.id} value={salon.saloonName}>
                  {salon.saloonName}
                </option>
              ))}
            </select>

          </div>
        </div>
        <button className='btn-continue' onClick={closeModal}>Continuar</button>
      </ModalPamyment>

      <ModalPamyment title="Nova Data" isOpen={openModal2} setModalOpen={() => setOpenModal(!openModal2)}>
        <div className='container-list-tenant'>
          <div className='inputs-modal'>
            <input type="number" min={0}
              onChange={(e) => setAmountOfGuests(e.target.value)}
              placeholder='Digite o total de convidados' />
            <input type="text"
              onChange={(e) => setDetails(e.target.value)}
              placeholder='Deseja adionar mais detalhes? (opcional)' />
            <div className='final-price'>
              <span>Valor:</span><span>R$ 60,00</span>
            </div>
          </div>
        </div>
        <button className='btn-continue' onClick={closeModal2}>Agendar</button>
      </ModalPamyment>

      <ModalPamyment title="Pagamento" isOpen={openModal3} setModalOpen={() => setOpenModal3(!openModal3)}>
        <div className='container-list-tenant'>
          <div className='inputs-modal'>
            <div
              className='inputs-payment-choice'
              style={{ backgroundColor: selectTypePaymennt === 'paypal' ? '#C6F7D3' : '' }}
              onClick={() => closeModal3('paypal')}>
              <span>Paypal</span>
              <span> &gt;</span>
            </div>
            <div
              className='inputs-payment-choice'
              style={{ backgroundColor: selectTypePaymennt === 'pix' ? '#C6F7D3' : '' }}
              onClick={() => closeModal3('pix')}>
              <span>Pix</span>
              <span> &gt;</span>
            </div>
            <div className='final-price'>
              <span>Valor:</span><span>R$ 60,00</span>
            </div>
          </div>
        </div>
        <button className='btn-continue' onClick={openPayment}>Agendar</button>
      </ModalPamyment>

      <ModalPamyment title="Pix" isOpen={openModal4} setModalOpen={() => setOpenModal3(!openModal4)}>
        <div className='container-payment-pix'>
          <PIX
            pixkey="estudosviny@gmail.com"
            merchant="Vinicius A Nunes"
            city="São Paulo, Sp"
            onLoad={setMinimalPIX}
          />
          <p className='text-pix-code'>
            Escaneie o Qr Code ou utilize a chave pix para realizar o pagamento.
          </p>
          <input type="text" className='pix-final-code' value={minimalPIX} />
          <div className='pix-final-value'>
            <span>Valor</span> <span>R$ 60,00</span>
          </div>
          <button className='btn-cancel' onClick={closeModal4}>Cancelar</button>
        </div>
      </ModalPamyment>
    </>
  )
}

export default ScheduleBoxAdd