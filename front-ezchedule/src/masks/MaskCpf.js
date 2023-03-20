import React from 'react'
import InputMask from 'react-input-mask'

const MaskCpf = ({value, onChange}) => {
  return <InputMask placeholder='CPF' mask="999.999.999-99" value={value} onChange={onChange}/>
}

export default MaskCpf