import React from "react";
import "./cardRecover.css";
import onBackPressed from "../../assets/left-arrow.png";
import { useNavigate } from "react-router-dom";

const CardRecover = ({ title, back, action, children }) => {
    const navigate = useNavigate();

    return (
        <>
            <form className="form-recover">
                <div className='form-header'>
                    <img className='on-back' src={onBackPressed} onClick={() => navigate(back)} />
                    <h2>{ title }</h2>
                </div>

                <div className="form-body">
                    {children}
                </div>

                <button className='button' type="button" onClick={() => action()}>Confirmar</button>
            </form>
        </>
    );
}

export default CardRecover;