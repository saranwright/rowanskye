import '../App.css';
import RowanLogo from '../assets/rowanskye_logo.png';

function Logo() {
    return (
        <div className="topLogo">
            <h1 aria-label="Rowan Skye Studio">
            <img className="logo" src={RowanLogo} alt="Rowan Skye Logo" />
            </h1>
        </div>
    );
}

export default Logo;