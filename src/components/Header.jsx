import '../css/Header.css';
import logo from '../assets/nailong.png';

function Header() {
    return (
        <header>
            <div className="left-side">
                <img src={logo} alt="Logo" />
                <div className="vertical-line"></div>
                <h1>My Portfolio</h1>
            </div>
        </header>
    )
}

export default Header