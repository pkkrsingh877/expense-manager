import { Link } from 'react-router-dom';
import useFetch from '../Utilities/useFetch'
import { useEffect, useState } from 'react';
import  '../../css/expenses.css';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { data, pending, error } = useFetch('http://localhost:8000/expenses');
    const deleteButton = document.querySelector('#deleteButton');
    const updateButton = document.querySelector('#updateButton');

    updateButton.addEventListener('click', (e) => {
        // update operation code
    });

    deleteButton.addEventListener('click', (e) => {
        // delete operation code
    });

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
                    <span>{expense.productName}</span> 
                    <span>&#x20B9;{expense.totalAmount}</span>
                    <button id="updateButton">Update</button>
                    <button id="deleteButton">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Expenses;