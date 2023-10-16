import { Link } from 'react-router-dom';
import '../../css/navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='nav-items'>Expense Tracker</h1>
            <div className="nav-items nav-links">
                <Link to={'/'} className="nav-link">Home</Link>
                <Link to={'/create'} className="nav-link">Create</Link>
                <Link to={'/about'} className="nav-link">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;