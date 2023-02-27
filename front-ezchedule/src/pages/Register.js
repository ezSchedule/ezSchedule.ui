import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='mainForm'>
      <form>
        <h1>Cadastrar</h1>
        <div className='divInputs'>
          <input type="text" placeholder='Nome' required />
          <input type="text" placeholder='Sobrenome' required/>
          <input type="text" placeholder='CPF' required/>
          <div className='divInputsNumbers' required>
            <input type="text" placeholder='Nº Apt' required/>
            <input type="text" placeholder='Bloco' required/>
          </div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Register