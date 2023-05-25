import React from 'react'
import InputMask from 'react-input-mask'

const MaskCpf = ({value, onChange}) => {
  return <InputMask type='text' placeholder='CPF' mask="999.999.999-99" value={value} onChange={onChange}/>
}

export default MaskCpf