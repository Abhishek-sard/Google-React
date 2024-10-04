// ├── Header
// │   ├── Logo
// │   ├── SearchBar
// │   ├── NavigationMenu
// │   └── CartIcon

import logo from '../Header/logo.png'
function Header(){
    return (
        <div className="navbar">
            <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
            <input type="text" placeholder='Search bar'/>


        </div>

    );
}
export default Header