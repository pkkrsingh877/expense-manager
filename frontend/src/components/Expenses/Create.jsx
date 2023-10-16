import { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
            />
            <input
                type="text"
                placeholder="Number of Product"
                value={numOfProduct}
                onChange={(event) => setNumOfProduct(event.target.value)}
            />
            <input
                type="number"
                placeholder="Total amount"
                value={totalAmount}
                onChange={(event) => setTotalAmount(event.target.value)}
            />
            <input
                type="text"
                placeholder="Notes"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default Create;