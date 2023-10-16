import { useState } from 'react';
import '../../css/form.css';

const Create = () => {

    const [productName, setProductName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [numOfProduct, setNumOfProduct] = useState('');
    const [notes, setNotes] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        // Add the expense to your backend here
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
            Number of Product: 
            <input
                type="text"
                placeholder="Number of Product"
                value={numOfProduct}
                onChange={(event) => setNumOfProduct(event.target.value)}
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
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default Create;
