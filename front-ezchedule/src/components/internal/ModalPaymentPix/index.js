import React from "react";
import "../../Modal/modal.css";
import Close from "../../assets/fechar.png";

const ModalPaymentPix = ({ isOpen4, children, setModalOpen4, title4 }) => {
    if (isOpen4) {
        return (
            <div className="bg-modal">
                <div className="card-modal">
                    <div className="header-modal">
                        <h2>{title4}</h2>
                        <img onClick={setModalOpen4} src={Close} />
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

export default ModalPaymentPix;