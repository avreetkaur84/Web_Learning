import "./Navbar.css"
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <nav className="navbar">
                <div className="navbar-logo">
                    <a href="/">CineHub</a>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Genres</a>
                        </li>
                        <li>
                            <a href="/">Favorites</a>
                        </li>
                    </ul>
                </div>
                <div className="navButtons">
                    <Button variant="contained" color="error" size="small">Sign in </Button>
                    <Button variant="contained" color="error" size="small">Login</Button>
                </div>
        </nav>
    );
}