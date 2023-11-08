import React from 'react';
import './inputInformation.css';
import Modal from '../MiniModal';
import { useState } from 'react';
import Swal from 'sweetalert2';
import salonsFetch from '../../../hooks/salonsFetch';

const InputInformation = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const [saloonName, setSaloonName] = useState('');
  const [saloonPrice, setSaloonPrice] = useState(0.0);
  const [saloonBlock, setSaloonBlock] = useState('');

  function registerSaloon() {
    const saloon = { saloonName: saloonName, saloonPrice: saloonPrice, saloonBlock: saloonBlock, condominium: sessionStorage.CONDOMINIUM }
    salonsFetch.post(``, saloon)
      .then(() => {
        modalSuccess();
        setInterval(window.location.reload(false), 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function validateFields() {
    if (saloonName === '') modalError("O nome do salão não pode ser vazio!");
    else if (saloonBlock === '') setSaloonBlock('O Salão não possuí um bloco específico.');
    else registerSaloon();
  }

  function modalError(text) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 2000
    });
  }

  function modalSuccess() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Salão cadastrado com sucesso!',
      showConfirmButton: false,
      timer: 2000
    });
  }

  if (props.button) {
    return (
      <>
        <div className='main-button-information' onClick={() => setOpenModal(true)}>
          <p>{props.attribute}</p>
          <input defaultValue={props.information} readOnly />
        </div>

        <Modal title="Adicionar salão" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} saloon="saloon" className="inputTitle">
          <input type='text' placeholder='Nome do salão' maxLength={50} onChange={(e) => setSaloonName(e.target.value)} />
          <input type='number' placeholder='Valor...' min="0.00" step="0.01" onChange={(e) => setSaloonPrice(e.target.value)} />
          <div className='div-block'>
            <label>Bloco: </label>
            <input type='text' placeholder='Número/Letra' maxLength={10} onChange={(e) => setSaloonBlock(e.target.value)} />
          </div>
          <button onClick={() => validateFields()}>Confirmar</button>
        </Modal>
      </>
    )
  } else {
    return (
      <>
        <div className='main-input-information'>
          <p>{props.attribute}:</p>
          <input defaultValue={props.information} onChange={(e) => props.insert(e.target.value)} readOnly={props.editable} />
        </div>
      </>
    )
  }
}

export default InputInformation