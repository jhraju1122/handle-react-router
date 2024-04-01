import './Header.css'
import { Outlet, Link } from "react-router-dom";



const Header = () => {
    return (
        <div>
            <h2>My website</h2>

            <nav>
                 <Link to="/">Home</Link>
                 <Link to="/about">About</Link>
                 <Link to="/users">Users</Link>
                 <Link to="/header">Header</Link>
                 
            </nav>
        </div>
    );
};

export default Header;