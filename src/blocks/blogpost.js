import '../App.css';
import 'foundation-sites/dist/css/foundation.min.css';
//import { Button, ButtonGroup, Colors } from 'react-foundation';

function Blogpost(props) {
    return(
        <div className="main">
            <h2>{props.title}</h2>
            <p className="tagline">{props.date}</p>
            {props.content}
        </div>
    );
}

export default Blogpost;