import React from 'react';
import GitHub from '../../assets/github.png';
import Envelop from '../../assets/email.png';
import Location from '../../assets/localizacao.png';
import './contact.css'
import { Link } from 'react-router-dom';
const Contact = () => {

    function goToMap() {
        window.location = 'https://www.google.com/maps/place/S%C3%A3o+Paulo+Tech+School/@-23.5581213,-46.661614,15z/data=!4m2!3m1!1s0x0:0xc567c0d16d0bc582?sa=X&ved=2ahUKEwj1wq-qrZH_AhW6IrkGHS4ECxgQ_BJ6BAgmEAg'
    }

    function goToGitHub() {
        window.location = 'https://github.com/ezSchedule'
    }
    return (
        <div className='mainContact'>
            <div className='contact'>
                <div className="title">
                    <h1>Entre em contato conosco!</h1>
                </div>
                <div className='imgContact'>
                    <Link to='mailto:ezSchelude.sptech@gmail.com'>
                        <img src={Envelop} alt="" />
                    </Link>
                    <img onClick={() => goToGitHub()} src={GitHub} alt="" />
                    <img onClick={() => goToMap()} src={Location} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact