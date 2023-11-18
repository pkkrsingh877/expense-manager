import { Link } from 'react-router-dom';
import useFetch from '../Utilities/useFetch'
import { useEffect, useState } from 'react';
import '../../css/expenses.css';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const { data, pending, error } = useFetch('http://localhost:8000/expense');

    const handleDelete = async (id) => {
        // Add the expense to your backend here
        const response = await fetch(`http://localhost:8000/expense`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id })
        });

        const message = await response.json();

        if (message.status === 'success') {
            setExpenses((prevExpenses) => prevExpenses.filter(expense => expense._id !== id));
        } else if (message.status === 'failure') {
            // Later handle it
        }
    }

    useEffect(() => {
        if (data) {
            setExpenses(data);
        }
    }, [data]);

    return (
        <div>
            {expenses && expenses.map(expense => (
                <div className="card mb-3 shadow p-3 bg-body rounded" key={expense._id} id={expense._id}>
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/expense/${expense._id}`}>
                            {expense.productName}
                        </Link></h5>
                        <p className="card-text"><b>Price:</b> &#x20B9;{expense.totalAmount}</p>
                        <p className="card-text"><b>Last Updated At:</b> {new Date(expense.updatedAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + 
                        ", " + 
                        new Date(expense.updatedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                        <div className="buttons">
                        <Link to={`/expense/update/${expense._id}`} className="updateButton btn btn-primary">
                            Update
                        </Link>
                        <button className="deleteButton  btn btn-danger" onClick={() => handleDelete(expense._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Expenses;