const Expense = () => {
    const [expenses, setExpenses] = useState([]);
    const { data, pending, error } = useFetch(`http://localhost:8000/expense/${id}`);

    return ( 
        <div>
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