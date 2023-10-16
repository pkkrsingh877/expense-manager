import { Link } from 'react-router-dom';

const Expenses = () => {
    return ( 
        <div>
            <Link to={`/create`} >Add an Expense</Link>
        </div>
     );
}
 
export default Expenses;