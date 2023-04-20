import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <>
      <div className='card'>
        <p className='titleMonth'>{props.nomeMes}</p>
        <p className='information'>{props.qtdPessoas} Pessoas</p>
        <p className='information'>{props.qtdConvidados} Convidados</p>
      </div>

    </>
  )
}

export default card;