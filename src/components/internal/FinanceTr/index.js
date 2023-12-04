import React from 'react'
import './financeTr.css'
const FinanceTr = (props) => {
    return (
        <>
            <tr className="dataTable" onClick={props.onClick}>
                <td>{props.name}</td>
                <td>{new Date(props.date).toLocaleDateString()}</td>
                <td>{props.salon}</td>
                <td>{props.value}</td>
            </tr>
        </>
    )
}

export default FinanceTr