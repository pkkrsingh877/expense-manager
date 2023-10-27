import { Link } from 'react-router-dom';
import useFetch from '../Utilities/useFetch'
import { useEffect, useState } from 'react';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { data, pending, error } = useFetch('http://localhost:8000/expenses');
    // will complete this
    useEffect(() => {
        if (data) {
            setExpenses(data);
        }
        console.log(data)
    }, [data]);
    
    return (
        <div>
            <Link to={`/create`} >Add an Expense</Link>
            <ul>
                {expenses && expenses.map(expense => (
                    <li key={expense._id}> ${expense.totalAmount}</li>
                ))}
            </ul>
        </div>
    );
}

export default Expenses;