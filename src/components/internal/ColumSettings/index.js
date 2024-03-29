import React from 'react';
import './columSettings.css';
import InputInformation from '../InputInformation';
import ImgPerfil from "../../assets/user.png";
import userFetch from '../../../hooks/userFetch';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ColumSettings = (props) => {
  const id = sessionStorage.ID;
  const token = sessionStorage.TOKEN;
  const [name, setName] = useState(sessionStorage.NAME);
  const [cpf, setCpf] = useState(sessionStorage.CPF);
  const [apartmentNumber, setApartment] = useState(sessionStorage.APARTMENT);
  const [residentsBlock, setBlock] = useState(sessionStorage.BLOCK);
  const [phoneNumber, setPhone] = useState(sessionStorage.PHONE);
  const [email, setEmail] = useState(sessionStorage.EMAIL);
  const [image, setImage] = useState({
    selectedFile: null
  });

  function fileSelectedHandler(event) {
    setImage({
      selectedFile: event.target.files[0]
    })
  }

  function updateTenant() {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('cpf', cpf);
    fd.append('apartmentNumber', apartmentNumber);
    fd.append('residentsBlock', residentsBlock);
    fd.append('phoneNumber', phoneNumber);
    fd.append('email', email);
    if (image.selectedFile != null) fd.append('image', image.selectedFile, image.selectedFile.name);
    const config = { headers: { Authorization: `Bearer ${token}` } };

    userFetch.put(`/update-tenant?id=${id}`, fd)
      .then((res) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Informações atualizadas com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        updateSession(res.data);
        setInterval(() => window.location.reload(false), 1500);
      }).catch((err) => {
        console.clear();
        errorMessage(err.response.status)
      });
  }

  function errorMessage(status) {
    if (status === 500) {
      alert("Error 500");
    } else if (status === 401) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Você não tem permissão para isso.',
        showConfirmButton: false,
        timer: 1500
      });
    } else if (status === 404) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Informações com erros ortográficos.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  function updateSession(data) {
    sessionStorage.NAME = data.name;
    sessionStorage.CPF = data.cpf;
    sessionStorage.APARTMENT = data.apartmentNumber;
    sessionStorage.BLOCK = data.residentsBlock;
    sessionStorage.PHONE = data.phoneNumber;
    sessionStorage.EMAIL = data.email;
    sessionStorage.IMAGE = "" + data.nameBlobImage;
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
          <label className='set-image'>
            <input type="file" onChange={fileSelectedHandler} />
            {
              <img src={sessionStorage.IMAGE === "null" ?
                ImgPerfil : sessionStorage.IMAGE} />
            }
          </label>
          <p>{props.name}</p>
        </div>
      </div>
      <div className='settingsButtons'>
        <button id='cancel' onClick={cancelChanges}>
          <Link to="/configurationAdm" style={{ color: "#000" }}>Voltar</Link>
        </button>
        <button onClick={inputValidation}>Salvar</button>
      </div>
    </>
  )
}

export default ColumSettings