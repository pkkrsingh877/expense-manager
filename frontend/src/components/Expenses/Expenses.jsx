import { Link } from 'react-router-dom';
import useFetch from '../Utilities/useFetch'
import { useEffect, useState } from 'react';
import '../../css/expenses.css';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { data, pending, error } = useFetch('http://localhost:8000/expenses');
    
    const handleDelete = async (id) => {
        // Add the expense to your backend here
        const response = await fetch(`http://localhost:8000/expenses`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id })
        });
    }

    useEffect(() => {
        if (data) {
            setExpenses(data);
        }
        console.log(data)
    }, [data]);

    return (
        <div>
            <Link to={`/create`} >Add an Expense</Link>
            <ul className='list' type='none'>
                {expenses && expenses.map(expense => (
                    <li key={expense._id} className='list-items'>
                        <Link to={`/${expense._id}`}>
                        <span>{expense.productName}</span>
                        </Link>
                        <span>&#x20B9;{expense.totalAmount}</span>
                        <Link to={`/update/${expense._id}`}>
                            <button className="updateButton">Update</button>
                        </Link>
                        <button className="deleteButton" onClick={() => handleDelete(expense._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Expenses;