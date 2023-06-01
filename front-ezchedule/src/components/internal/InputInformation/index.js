import React from 'react'
import './inputInformation.css'

const InputInformation = (props) => {
  return (
    <>
        <div className='mainInputInformation'>
            <p>{props.attribute}:</p>
            <input defaultValue={props.information} onChange={(e) => props.insert(e.target.value)} readOnly={props.editable}/>
        </div>
    </>
  )
}

export default InputInformation