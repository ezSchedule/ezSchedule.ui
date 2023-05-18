import React from 'react'
import './scheduleBoxAdd.css'
import Modal from '../../Modal'
import { useState, useEffect, useRef } from 'react'
import ModalPamyment from '../ModalPayment'
import ModalPaymentChoice from '../ModalPaymentChoice'
import { Link } from 'react-router-dom'
import ModalPaymentPix from '../ModalPaymentPix'
import PIX from 'react-qrcode-pix'
const ScheduleBoxAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [minimalPIX, setMinimalPIX] = useState("");
  const [fullPIX, setFullPIX] = useState("");

  function closeModal() {
    setOpenModal(false);
    setOpenModal2(true);
  }

  function closeModal2() {
    setOpenModal2(false);
    setOpenModal3(true);
  }

  function closeModal3() {
    setOpenModal3(false);
    setOpenModal4(true);
  }
  return (
    <>
      <div className="scheduleBoxAddMain">
        <button onClick={() => setOpenModal(!openModal)}>
          +
        </button>
      </div>
      <Modal title="Nova Data" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div className='container-list-tenant'>
          <div className='inputs-modal'>
            <input type="text" placeholder='Nome do Evento' />
            <select name="cars" id="cars">
              <option value="Tipo do Evento">Tipo do Evento</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <input type="date" placeholder='Data do Evento' />
            <select name="cars" id="cars">
              <option value="volvo">Escolher Salão</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <button className='btn-continue' onClick={closeModal}>Continuar</button>
      </Modal>

      <ModalPamyment title2="Nova Data" isOpen2={openModal2} setModalOpen2={() => setOpenModal2(!openModal2)}>
        <div className='container-list-tenant'>
          <div className='inputs-modal'>
            <input type="text" placeholder='Digite o total de convidados' />
            <input type="text" placeholder='Deseja adionar mais detalhes?' />
            <div className='final-price'>
              <span>Valor:</span><span>R$ 60,00</span>
            </div>
          </div>
        </div>
        <button className='btn-continue' onClick={closeModal2}>Agendar</button>
      </ModalPamyment>

      <ModalPaymentChoice title3="Pagamento" isOpen3={openModal3} setModalOpen3={() => setOpenModal3(!openModal3)}>
        <div className='container-list-tenant'>
          <div className='inputs-modal'>
            <div className='final-price-choice-payment'>
              <span>Mercado Pago</span><span> &gt; </span>
            </div>
            <div className='final-price-choice-payment'>
              <span>Pix</span><span onClick={closeModal3}> &gt; </span>
            </div>
            <div className='final-price'>
              <span>Valor:</span><span>R$ 60,00</span>
            </div>
          </div>
        </div>
        <button className='btn-continue'>Agendar</button>
      </ModalPaymentChoice>
      <ModalPaymentPix title4="Pix" isOpen4={openModal4} setModalOpen4={() => setOpenModal4(!openModal4)}>
        <PIX
          pixkey="estudosviny@gmail.com"
          merchant="Vinicius A Nunes"
          city="São Paulo, Sp"
          onLoad={setMinimalPIX}
        />
        <p>
          Escaneie o Qr Code ou utilize a chave pix para realizar o pagamento.
        </p>
        <p className='pix-code'>
          <input type="text" value={minimalPIX} />
        </p>
      </ModalPaymentPix>
    </>
  )
}

export default ScheduleBoxAdd