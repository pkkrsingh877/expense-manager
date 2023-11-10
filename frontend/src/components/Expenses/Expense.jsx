import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Expense = () => {
    const { id } = useParams();
    const [expense, setExpense] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/expenses/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data) {
                    setExpense(data)
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    return (
        <div>
            {console.log(expense)}
            <b>Product Id: {expense._id}</b>
            <b>Product Name: {expense.productName}</b>
            <b>Number of Products: {expense.numberOfProducts}</b>
            <b>Total Amount: {expense.totalAmount}</b>
            <b>Notes: {expense.notes}</b>
            <b>Type of Expense: {expense.typeOfExpense}</b>
            <b>Created At: {expense.createdAt}</b>
            <b>Updated At: {expense.updatedAt}</b>
        </div>
    );
}

export default Expense;