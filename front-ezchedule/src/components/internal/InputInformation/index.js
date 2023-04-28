import React from 'react'
import './inputInformation.css'
import { useState } from 'react'

const InputInformation = (props) => {
  return (
    <>
        <div className='mainInputInformation'>
            <p>{props.attribute}:</p>
            <input defaultValue={props.information} onChange={(e) => props.insert(e.target.value)} />
        </div>
    </>
  )
}

export default InputInformation