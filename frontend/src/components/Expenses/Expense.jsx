import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Utilities/useFetch';

const Expense = () => {
    const { id } = useParams();
    const [expense, setExpense] = useState();

    const { data, pending, error } = useFetch(`http://localhost:8000/expense/${id}`);

    useEffect(() => {
        if (data) {
            setExpense(data);
        }
    }, [data]);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {pending && <div>Loading...</div>}

            {expense && (
                <>
                <h2>Product Data:</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Attributes</th>
                                <th scope="col">Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Product Name</th>
                                <td>{expense.productName}</td>
                            </tr>
                            <tr>
                                <th scope="row">Number Of Products</th>
                                <td>{expense.numberOfProducts}</td>
                            </tr>
                            <tr>
                                <th scope="row">Total Amount</th>
                                <td colSpan="2">{expense.totalAmount}</td>
                            </tr>
                            <tr>
                                <th scope="row">Notes</th>
                                <td colSpan="2">{expense.notes}</td>
                            </tr>
                            <tr>
                                <th scope="row">Type Of Expense</th>
                                <td colSpan="2">{expense.typeOfExpense}</td>
                            </tr>
                            <tr>
                                <th scope="row">Created At</th>
                                <td colSpan="2">{expense.createdAt}</td>
                            </tr>
                            <tr>
                                <th scope="row">Updated At</th>
                                <td colSpan="2">{expense.updatedAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </>)}
        </div>
    );
}

export default Expense;