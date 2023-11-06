import React, { useState, useEffect } from "react";
import "./modal.css";
import Close from "../assets/fechar.png";

const Modal = ({ isOpen, children, setModalOpen, title }) => {

    if (isOpen) {
        return (
            <div className="bg-modal">
                <div className="card-modal">
                    <div className="header-modal">
                        <h2>{title}</h2>
                        <img onClick={setModalOpen} src={Close} />
                    </div>
                    <div className="body-modal">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

export default Modal;
