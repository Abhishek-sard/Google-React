// ├── Header
// │   ├── Logo
// │   ├── SearchBar
// │   ├── NavigationMenu
// │   └── CartIcon



import './header.css'//import css file
import logo from '../Header/logo.png';
import About from './About.jsx';
function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="navigationmenu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="Products">Products</a></li>
                
                </ul>
            </div>
        </div>
    );
}

export default Header;
