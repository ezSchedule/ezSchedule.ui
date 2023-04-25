import React from 'react'
import './inputInformation.css'

const InputInformation = (props) => {
  return (
    <>
        <div className='mainInputInformation'>
            <p>{props.attribute} : {props.information}</p>
        </div>
    </>
  )
}

export default InputInformation