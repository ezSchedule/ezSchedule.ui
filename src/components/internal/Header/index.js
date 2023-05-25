import React from 'react'
import './index.css'
import UserDeafult from '../../assets/user.png'


const HeaderInternal = (props) => {
  return (
    < >
        <div className='headerInternal'>
          <div className='insideHeader'>
              <div>
                <h3>{props.text}</h3>
                <img src={UserDeafult} />
              </div>
          </div>
        </div>
    </>
  )
}

export default HeaderInternal