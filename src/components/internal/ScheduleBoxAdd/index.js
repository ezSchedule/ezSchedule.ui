import React from 'react'
import './scheduleBoxAdd.css'
import { useState, useEffect, useRef } from 'react'
import ModalPamyment from '../ModalPayment'
import PIX from 'react-qrcode-pix'
import imgAdd from '../../assets/+.png'
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
      </ModalPamyment>

      <ModalPamyment title="Nova Data" isOpen={openModal2} setModalOpen={() => setOpenModal(!openModal2)}>
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

      <ModalPamyment title="Pagamento" isOpen={openModal3} setModalOpen={() => setOpenModal3(!openModal3)}>
        <div className='container-list-tenant'>
          <div className='inputs-modal'>
            <div className='inputs-payment-choice'>
              <span>Mercado Pago</span><span onClick={closeModal2} className='span-btn'> &gt; </span>
            </div>
            <div className='inputs-payment-choice'>
              <span>Pix</span><span onClick={closeModal2} className='span-btn'> &gt; </span>
            </div>
            <div className='final-price'>
              <span>Valor:</span><span>R$ 60,00</span>
            </div>
          </div>
        </div>
        <button className='btn-continue' onClick={closeModal3}>Agendar</button>
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