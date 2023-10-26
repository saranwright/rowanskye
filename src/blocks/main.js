import '../App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import { Button, ButtonGroup, Colors } from 'react-foundation';

function Main(props) {
    return(
        <div className="main">
           {props.content}
        </div>
    );
}

export default Main;