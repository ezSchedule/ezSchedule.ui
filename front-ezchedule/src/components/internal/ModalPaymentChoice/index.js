import React from "react";
import "../../Modal/modal.css";
import Close from "../../assets/fechar.png";

const ModalPaymentChoice = ({ isOpen3, children, setModalOpen3, title3 }) => {
    if (isOpen3) {
        return (
            <div className="bg-modal">
                <div className="card-modal">
                    <div className="header-modal">
                        <h2>{title3}</h2>
                        <img onClick={setModalOpen3} src={Close} />
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

export default ModalPaymentChoice;