import React, { useState, useEffect } from 'react';
import './tableRequestPayment.css';
import aceptImg from "../../assets/acept.png";
import rejectImg from "../../assets/cancel.png";
import { firestore } from '../../../hooks/firebase';
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const TableRequestPayment = () => {
    const [payments, setPayments] = useState([]);
    const [condominiumId, setCondominiumId] = useState();

    useEffect(() => {
        setCondominiumId(sessionStorage.CONDOMINIUM);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (condominiumId) {
                const paymentsRef = collection(firestore, `reports-${condominiumId}`);

                try {
                    const querySnapshot = await getDocs(paymentsRef);
                    const data = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setPayments(data);
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching payments:', error);
                }
            }
        };

        fetchData();
    }, [condominiumId]);

    const acceptSolicitationPayment = async (id) => {
        if (id) {
            const date = new Date().toISOString();
            const paymentRef = doc(firestore, `reports-${condominiumId}`, id);

            try {
                await updateDoc(paymentRef, { paymentStatus: 'PAGO', paymentDate: date });
                window.location.reload();
            } catch (error) {
                console.error('Error accepting payment:', error);
            }
        }
    };

    const rejectSolicitationPayment = async (id) => {
        if (id) {
            const paymentRef = doc(firestore, `reports-${condominiumId}`, id);

            try {
                await deleteDoc(paymentRef);
                window.location.reload();
            } catch (error) {
                console.error('Error rejecting payment:', error);
            }
        }
    };

    return (
        <>
            <table>
                <thead>
                    <tr className='title'>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {payments.length > 0 ? (
                        payments.map((payment) => (
                            <tr className="solicitation-payments-table" key={payment.id}>
                                <td>{payment.schedule.nameEvent}</td>
                                <td>{new Date(payment.schedule.dateEvent).toLocaleDateString()}</td>
                                <td>R$ {payment.saloon.saloonPrice}</td>
                                <td className='imgs-acept-or-reject'>
                                    <img
                                        className='img-reject'
                                        src={rejectImg}
                                        onClick={() => rejectSolicitationPayment(payment.id)}
                                        alt="deafult description" />
                                    <img
                                        className='img-acept'
                                        src={aceptImg}
                                        onClick={() => acceptSolicitationPayment(payment.id)}
                                        alt="deafult description" />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className="solicitation-payments-table">
                            <td>Não existem solicitações :(</td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default TableRequestPayment;
