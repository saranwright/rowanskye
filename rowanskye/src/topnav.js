import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';

function TopNav() {
    return(
        <ul className="menu align-center topnav">
            <li><a href="#">HOME</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
    );
}

export default TopNav;