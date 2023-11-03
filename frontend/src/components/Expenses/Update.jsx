import { useState } from 'react';

const UpdateExpense = () => {
    
    const [productName, setProductName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [numberOfProducts, setNumberOfProducts] = useState('');
    const [notes, setNotes] = useState('');
    const [typeOfExpense, setTypeOfExpense] = useState('default');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        // Add the expense to your backend here
        const response = fetch('http://localhost:8000/expenses', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productName, totalAmount, numberOfProducts, notes, typeOfExpense
            }),
          });
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            Product Name:
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
            />
            Number of Products: 
            <input
                type="text"
                placeholder="Number of Product"
                value={numberOfProducts}
                onChange={(event) => setNumberOfProducts(event.target.value)}
            />
            Total Amount: 
            <input
                type="number"
                placeholder="Total amount"
                value={totalAmount}
                onChange={(event) => setTotalAmount(event.target.value)}
            />
            Notes:
            <textarea
                placeholder="Notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
            />
            Type Of Expense:
            <select
                value={typeOfExpense}
                onChange={(event) => setTypeOfExpense(event.target.value)}
            >
                <option value="default">Default</option>
                <option value="recurring">Recurring</option>
                <option value="future">Future</option>
            </select>
            <button type="submit">Add Expense</button>
        </form>
    );
}
 
export default UpdateExpense;
