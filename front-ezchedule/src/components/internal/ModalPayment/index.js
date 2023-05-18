import React from "react";
import "../../Modal/modal.css";
import Close from "../../assets/fechar.png";

const ModalPayment = ({ isOpen2, children, setModalOpen2, title2 }) => {
    if (isOpen2) {
        return (
            <div className="bg-modal">
                <div className="card-modal">
                    <div className="header-modal">
                        <h2>{title2}</h2>
                        <img onClick={setModalOpen2} src={Close} />
                    </div>
                    <div className="body-modal">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default ModalPayment;