import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './registerPart3.css';
import onBackPressed from '../../../components/assets/left-arrow.png';
import userAvatar from '../../../components/assets/user-avatar.png';
import { useState } from 'react';
import Swal from 'sweetalert2';
import userFetch from '../../../hooks/userFetch';

const RegisterPart3 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  var flag = false;

  const name = location.state.name;
  const cpf = location.state.cpf;
  const apartment = location.state.apartmentNumber;
  const block = location.state.residentsBlock;
  const subscribed = location.state.subscribed;
  const phone = location.state.phoneNumber;
  const email = location.state.email;
  const password = location.state.password;
  const [token, setToken] = useState("");
  const [image, setImage] = useState({
    selectedFile: null
  });

  const body = {
    name: name,
    cpf: cpf,
    apartmentNumber: apartment,
    residentsBlock: block,
    subscribed: subscribed,
    phoneNumber: phone,
    email: email,
    password: password,
    nameBlobImage: image,
    condominium: token
  };

  function fileSelectedHandler(event) {
    setImage({
      selectedFile: event.target.files[0]
    })
  }

  function validateData() {
    if (token === "" || token === undefined) modal("O campo token não pode ser vazio!");
    else if (image.selectedFile === null && !flag) modalImage();
    else registerUser();
  }

  function registerUser() {
    const fd = new FormData();
    fd.append('name', body.name);
    fd.append('cpf', body.cpf);
    fd.append('apartmentNumber', body.apartmentNumber);
    fd.append('residentsBlock', body.residentsBlock);
    fd.append('subscribed', body.subscribed);
    fd.append('phoneNumber', body.phoneNumber);
    fd.append('email', body.email);
    fd.append('password', body.password);
    fd.append('condominium', body.condominium);
    if (image.selectedFile != null) fd.append('nameBlobImage', image.selectedFile, image.selectedFile.name);

    userFetch.post(``, fd, {
      onUploadProgress: ProgressEvent => {
        console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
      }
    })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        modal("Token inválido!");
        console.log(err);
      });
  }

  function modalImage() {
    Swal.fire({
      title: 'Você quer continuar sem inserir uma imagem?',
      showDenyButton: true,
      confirmButtonText: 'Retornar',
      denyButtonText: `Continuar sem salvar imagem`,
    }).then((result) => {
      if (result.isConfirmed) return;
      else if (result.isDenied) registerUser();
    })
  }

  function modal(text) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div className='mainFormPart3'>
      <div className='container'>
        <form>

          <div className='headerForm'>
            <img className='onBack' src={onBackPressed} onClick={() => navigate("/registerPart2", { state: body })} alt='Back button' />
            <h1>Perfil</h1>
          </div>

          <div className='inputsContainer'>
            <label className="custom-file-upload">
              <input type="file" onChange={fileSelectedHandler} />
              <img className='imgAvatar' src={userAvatar} type="file" alt='Add user' />
            </label>
            <input id="syndicate" type="text" placeholder='Insira seu token' onChange={(e) => setToken(e.target.value)} />
          </div>

          <button className='button' type='button' onClick={() => validateData()}>Finalizar</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPart3