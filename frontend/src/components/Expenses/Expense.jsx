import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useFetch from '../Utilities/useFetch';

const Expense = () => {
    const { id } = useParams();
    const [expense, setExpense] = useState();
    const navigate = useNavigate();

    const { data, pending, error } = useFetch(`http://localhost:8000/expense/${id}`);

    useEffect(() => {
        if (data) {
            setExpense(data);
        }
    }, [data]);

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
            navigate('/expense')
        } else if (message.status === 'failure') {
            // Later handle it
        }
    }

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {pending && <div>Loading...</div>}

            {expense && (
                <>
                    <h2>Product Data:</h2>
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
                </>)}
        </div>
    );
}

export default Expense;