import React, { useState } from 'react'
import './index.css'
import UserDeafult from '../../assets/user.png';
import Toggle from '../Toggle';

const HeaderInternal = (props) => {
  const [toggle, setToggle] = useState();

  return (
    < >
      <div className='headerInternal'>
        <div className='insideHeader'>
          <div className='content'>
            <h3>{props.text}</h3>

            <div className='container-image'>
              {
                <img
                  className='image-user'
                  onClick={() => setToggle(!toggle)}
                  src={
                    sessionStorage.IMAGE === "null" ? 
                      UserDeafult : sessionStorage.IMAGE
                  } />
              }
              <Toggle isOpen={toggle} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderInternal