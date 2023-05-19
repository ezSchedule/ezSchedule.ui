import React from "react";
import "./modalPayment.css"
import Close from "../../assets/fechar.png";

const ModalPayment = ({ isOpen, children, setModalOpen, title }) => {
    if (isOpen) {
        return (
            <div className="bg-modal-payment">
                <div className="card-modal-payment">
                    <div className="header-modal-payment">
                        <h2>{title}</h2>
                        <img onClick={setModalOpen} src={Close} />
                    </div>
                    <div className="body-modal-payment">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default ModalPayment;