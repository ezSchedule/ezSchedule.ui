import React from 'react'
import './financeTr.css'
const FinanceTr = (props) => {
    return (
        <>
            <tr className="dataTable">
                <td>{props.name}</td>
                <td>{props.date}</td>
                <td>{props.salon}</td>
                <td>{props.value}</td>
            </tr>
        </>
    )
}

export default FinanceTr