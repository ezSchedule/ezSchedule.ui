import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <>
      <div className='card'>
        <div className='cardMonthTitle'>
          <p className='titleMonth'>Janeiro</p>
        </div>

        <div className='cardInformation'>
          <p className='information'>{props.qtdPessoas} Pessoas</p>
          <p className='information'>{props.qtdConvidados} Convidados</p>

        </div>
        
      </div>

    </>
  )
}

export default card;