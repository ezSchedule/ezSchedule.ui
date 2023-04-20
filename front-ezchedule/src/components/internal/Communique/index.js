import React from 'react'
import './communique.css'
import Filter from '../../assets/filter.png'
const Communique = (props) => {
    return (
        <>
            <div className='mainCommunique'>
                <div className='line'></div>
                <header>
                    <input type="text" disabled value={props.date} />
                    <img src={Filter} alt="" />
                </header>
                <div className='communiqueText'>
                    <div>
                        <h4>Manutenção ar condicionado</h4>
                        <p>Atenção a todos os moradores dos BLOCO A e BLOCO B, ocorrerá a manutenção trimestral dos ares-condicionados nos dias 18, 19, 20 21 de Fevereiro, peço a todos compreensão com as eventuais trivialidades que podem ocorrer, como barulhos sonoros e desligamento dos ares-condicionados.</p>
                        <div className='typeAndHour'>
                            <div>
                            <span>Comunicado</span>
                            <span>16:40</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Communique