import React from 'react'
import './inputInformation.css'
import { useState } from 'react'

const InputInformation = (props) => {
  const [variable, setVariable] = useState(props.information);

  return (
    <>
        <div className='mainInputInformation'>
            <p>{props.attribute}:</p>
            <input defaultValue={variable} onChange={(e) => setVariable(e.target.value)} />
        </div>
    </>
  )
}

export default InputInformation