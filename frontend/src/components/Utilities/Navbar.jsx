import { Link } from "react-router-dom";

const Navbar = () => {
    return <>
        <nav className="d-flex flex-direction-row">
            <Link to="/">Expenser</Link>
            <div className="d-flex flex-direction-row">
                <Link to="/expenses/add">Add Expense</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link> 
            </div>
        </nav>
    </>
}

export default Navbar;