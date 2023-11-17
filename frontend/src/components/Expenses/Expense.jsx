import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Utilities/useFetch';

const Expense = () => {
    const { id } = useParams();
    const [expense, setExpense] = useState();
    console.log(id);
    const { data, pending, error } = useFetch(`http://localhost:8000/expenses/${id}`);

    useEffect(() => {
        if(data){
            setExpense(data);
        }
    },[data]);

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {pending && <div>Loading...</div>}

            {expense && (
                <>
            <b>Product Id: {expense._id}</b>
            <b>Product Name: {expense.productName}</b>
            <b>Number of Products: {expense.numberOfProducts}</b>
            <b>Total Amount: {expense.totalAmount}</b>
            <b>Notes: {expense.notes}</b>
            <b>Type of Expense: {expense.typeOfExpense}</b>
            <b>Created At: {expense.createdAt}</b>
            <b>Updated At: {expense.updatedAt}</b>
            </>)}
        </div> 
    );
}

export default Expense;