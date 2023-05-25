import React from 'react'
import InputMask from 'react-input-mask'

const MaskPhone = ({value, onChange}) => {
  return <InputMask placeholder='Telefone' mask="(99)99999-9999" value={value} onChange={onChange}/>
}

export default MaskPhone    