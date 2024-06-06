import DashBoard from "./DashBoard";
import './Header.css'
import Logo from '../assets/Titleicon.svg';

function Header() {
    return(
            <header className='NavBar' id='nav'>
                <a href="/" className='Title'><img src={Logo} className="logo" width={200} ></img></a>
                <DashBoard/>
            </header>
    );
};

export default Header;