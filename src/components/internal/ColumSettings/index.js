import React, { useEffect } from 'react'
import './columSettings.css'
import InputInformation from '../InputInformation'
import ImgPerfil from "../../assets/Perfil.png"
import userFetch from '../../../hooks/userFetch';
import { useState } from 'react'
import Swal from 'sweetalert2';

const ColumSettings = (props) => {
  const id = sessionStorage.ID;
  const token = sessionStorage.TOKEN;
  const [name, setName] = useState(sessionStorage.NAME);
  const [cpf, setCpf] = useState(sessionStorage.CPF);
  const [apartmentNumber, setApartment] = useState(sessionStorage.APARTMENT);
  const [residentsBlock, setBlock] = useState(sessionStorage.BLOCK);
  const [phoneNumber, setPhone] = useState(sessionStorage.PHONE);
  const [email, setEmail] = useState(sessionStorage.EMAIL);

  function updateTenant() {
    const updateTenant = { name, cpf, apartmentNumber, residentsBlock, phoneNumber, email }
    const config = { headers: { Authorization: `Bearer ${token}` } };

    userFetch.put(`/update-tenant?id=${id}`, updateTenant, config)
      .then(() => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Informações atualizadas com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        updateSession(updateTenant);
      }).catch((err) => {
        console.clear();
        errorMessage(err.response.status)
      });
  }

  function errorMessage(status) {
    if (status == 500) {
      alert("Error 500");
    } else if (status == 401) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Você não tem permissão para isso',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (status == 404) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Informações com erros ortográficos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  function updateSession(updateTenant) {
    sessionStorage.NAME = updateTenant.name;
    sessionStorage.CPF = updateTenant.cpf;
    sessionStorage.APARTMENT = updateTenant.apartmentNumber;
    sessionStorage.BLOCK = updateTenant.residentsBlock;
    sessionStorage.PHONE = updateTenant.phoneNumber;
    sessionStorage.EMAIL = updateTenant.email;
  }

  function inputValidation() {
    if (name.length == 0 || cpf.length == 0 || apartmentNumber == 0 || residentsBlock.length == 0 || phoneNumber.length == 0) {
      modal('As informações não podem estar vazias!');
    }
    else if (name.length > 100) modal('A informação do nome tem muitos caracteres!');
    else if (cpf.length > 14) modal('CPF inválido, contém muitos caracteres!');
    else updateTenant()
  }

  function modal(text) {
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  function cancelChanges() {
    window.location.reload(false);
  }

  return (
    <>
      <div className='mainColumSettings'>
        <div className='settingsInformation'>
          <InputInformation attribute="Nome" information={name} insert={setName} editable={false} />
          <InputInformation attribute="CPF" information={cpf} insert={setCpf} editable={true} />
          <InputInformation attribute="Apartamento" information={apartmentNumber} insert={setApartment} editable={false} />
          <InputInformation attribute="Bloco" information={residentsBlock} insert={setBlock} editable={false} />
          <InputInformation attribute="Telefone" information={phoneNumber} insert={setPhone} editable={false} />
          <InputInformation attribute="Email" information={email} insert={setEmail} editable={true} />
        </div>
        <div className='settingsImg'>
          {
            <img src={sessionStorage.IMAGE == null ? ImgPerfil : sessionStorage.IMAGE} />
          }
          <p>{props.name}</p>
        </div>
      </div>
      <div className='settingsButtons'>
        <button id='cancel' onClick={cancelChanges}>Cancelar</button>
        <button onClick={inputValidation}>Salvar</button>
      </div>
    </>
  )
}

export default ColumSettings