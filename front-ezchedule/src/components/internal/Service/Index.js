import React from 'react'
import './ServiceList.css'
import { Link } from 'react-router-dom'

const ServiceList = () => {
  return (
    <>
        <div className='mainServiceList'>
            <div className='divAddService'>
                <Link to='/newService'><button>+</button></Link>
            </div>
            <div className='divInformationsTenant'>
                <div className='imgTenant'>
                    <img src="" alt="" />
                </div>
                <div className='textInfos'>
                    <h4>Diarista</h4>
                    <p>Maria</p>
                    <p>11 957806515</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceList