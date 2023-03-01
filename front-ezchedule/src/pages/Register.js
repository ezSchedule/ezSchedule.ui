import React from 'react'
import './Register.css'
import { useState } from 'react';


const Register = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [numberApartment, setNumberApartment] = useState('');
  const [bloco, setBloco] = useState('');

  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario sem recarregar a página...")
    //aqui eu irei fazer as máscaras

    //mostrando dados que peguei do form
    console.log(name)
    console.log(surname)
    console.log(cpf)
    console.log(numberApartment)
    console.log(bloco)

    //apagando do formulario os dados após enviar
    setName('');
    setSurname('');
    setCpf('');
    setNumberApartment('');
    setBloco('');
  }

  return (
    <div className='mainForm'>
      <form onSubmit={hendleSubmit}>
        <h1>Cadastrar</h1>
        <div className='divInputs'>
          <input type="text" name='name' placeholder='Nome' required
           onChange={(e) => setName(e.target.value)} value={name} />
          <input type="text" name='surname' placeholder='Sobrenome' required
           onChange={(e) => setSurname(e.target.value)} value={surname}/>
          <input type="text" name='cpf' placeholder='CPF' required 
          onChange={(e) => setCpf(e.target.value)} value={cpf}/>
          <div className='divInputsNumbers' required>
            <input type="number" name='numberApartment' placeholder='Nº Apt' required 
            onChange={(e) => setNumberApartment(e.target.value)} value={numberApartment}/>
            
            <input type="number" name='bloco' placeholder='Bloco' required 
            onChange={(e) => setBloco(e.target.value)} value={bloco}/>
          </div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Register