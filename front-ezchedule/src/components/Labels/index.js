import React from "react";
import "./label.css"

const Label = ({ label, text }) => {
    const TEXT_STYLE = { color: `${ text == "Pago" ? "#53D778" : "gray"}` }

    return (
        <div className="content-modal">
            <label>{label}</label>
            <span style={TEXT_STYLE}>{text}</span>
        </div>
    );
}

export default Label;