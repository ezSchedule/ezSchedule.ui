import React, { useEffect, useState } from 'react';
import './tablePayment.css';
import FinanceTr from '../FinanceTr';
import { firestore } from '../../../hooks/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';

const TablePayment = (props) => {
    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const typeRequest = sessionStorage.ADMIN === '1' ? 'condominium' : 'tenant';
                const userId = sessionStorage.ADMIN === '1' ? sessionStorage.CONDOMINIUM : sessionStorage.ID;

                const paymentsRef = collection(firestore, `reports-${sessionStorage.CONDOMINIUM}`);
                const querySnapshot = await getDocs(paymentsRef);

                const data = querySnapshot.docs
                    .filter((doc) => doc.data().paymentStatus === 'PAGO') // Filtra apenas os pagamentos com paymentStatus 'PAGO'
                    .map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                setPayments(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching payments:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    function modalError() {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ainda não possuí relatórios',
            showConfirmButton: true,
        });
    }

return (
    <>
        {isLoading ? (
            <div className='loading-message'>Carregando...</div>
        ) : (
            <table>
                <thead>
                    <tr className='title'>
                        <th>Nome</th>
                        <th>Data do pagamento</th>
                        <th>Salão</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.length > 0 ? (
                        payments.map((payment) => (
                            <FinanceTr
                                key={payment.id} 
                                onClick={() => {
                                    props.modalEdit(true);
                                    props.modalInformation(payment);
                                }}
                                name={payment.tenant.name}
                                date={payment.paymentDate === null ? 'Não pago' : payment.paymentDate}
                                salon={payment.saloon.name}
                                value={`R$ ${new Date(payment.saloon.saloonPrice).toLocaleDateString()}`}
                            />
                        ))
                    ) : (
                        <tr>{modalError()}</tr>
                    )}
                </tbody>
            </table>
        )}
    </>
);

// ... (restante do código)

};

export default TablePayment;
