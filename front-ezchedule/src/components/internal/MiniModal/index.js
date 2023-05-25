import React from "react";
import "./miniModal.css";
import Close from "../../assets/fechar.png";

const MiniModal = ({ isOpen, children, setModalOpen, title }) => {
    if (isOpen) {
        return (
            <div className="bg-mini-modal">
                <div className="card-mini-modal">
                    <div className="header-mini-modal">
                        <h2>{title}</h2>
                        <img onClick={setModalOpen} src={Close} />
                    </div>
                    <div className="body-mini-modal">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default MiniModal;