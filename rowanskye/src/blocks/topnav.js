import 'foundation-sites/dist/css/foundation.min.css';
import { Link } from 'react-router-dom';
import '../App.css';

function TopNav() {
    return(
        <ul className="menu align-center topnav">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
    );
}

export default TopNav;