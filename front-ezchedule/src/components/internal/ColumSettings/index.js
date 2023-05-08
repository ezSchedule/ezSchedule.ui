import React, { useEffect } from 'react'
import './columSettings.css'
import InputInformation from '../InputInformation'
import ImgPerfil from "../../assets/Perfil.png"
import userFetch from '../../../hooks/userFetch';
import { useState } from 'react'

const ColumSettings = (props) => {
  const [name, setName] = useState(sessionStorage.NAME);
  const [cpf, setCpf] = useState(sessionStorage.CPF);
  const [apartment, setApartment] = useState(sessionStorage.APARTMENT);
  const [block, setBlock] = useState(sessionStorage.BLOCK);
  const [phone, setPhone] = useState(sessionStorage.PHONE);
  const [email, setEmail] = useState(sessionStorage.EMAIL);

  function updateTenant() {
    const updateTenant = { name, cpf, apartmentNumber, residentsBlock, phoneNumber, email }
    const config = { headers: { Authorization: `Bearer ${token}` } };

    userFetch.put(`/update-tenant?id=${id}`, updateTenant, config)
      .then(() => {
        alert("Successfully updated information!")
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
      alert("You don't have permission for that");
    } else if (status == 404) {
      alert("Misspelled information");
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
      alert("Inputs cannot be empty!");
    } 
    else if (name.length > 100) alert("The name input has many characters!");
    else if (cpf.length > 14) alert("Invalid CPF, has too many characters!");
    else updateTenant()
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
          <InputInformation attribute="Nº Apartamento" information={apartmentNumber} insert={setApartment} editable={false} />
          <InputInformation attribute="Bloco" information={residentsBlock} insert={setBlock} editable={false} />
          <InputInformation attribute="Telefone" information={phoneNumber} insert={setPhone} editable={false} />
          <InputInformation attribute="Email" information={email} insert={setEmail} editable={true} />
        </div>
        <div className='settingsImg'>
          <img src={ImgPerfil} />
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