import Hero from './blocks/hero';
import Main from './blocks/main';
import 'foundation-sites/dist/css/foundation.min.css';
import { Button, ButtonGroup, Colors } from 'react-foundation';
import { Link } from 'react-router-dom';
import './App.css';

const content = 
  [ <div>
    <h2>Home ›</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
     <ButtonGroup isExpanded className="intro">
          <Button isHollow color={Colors.PRIMARY}><Link to="rowanskye/projects">Writing Projects »</Link></Button>
          <Button isHollow color={Colors.PRIMARY}><Link to="rowanskye/projects">Development Projects »</Link></Button>
          <Button isHollow color={Colors.PRIMARY}><Link to="rowanskye/projects">Design Work »</Link></Button>
     </ButtonGroup>
     <h2>Heading 2 ›</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
     <h3>Heading 3 ›</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.</p>
     <h4>Heading 4 ›</h4>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.</p>
     <h5>Heading 5 ›</h5>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.</p>
     <h6>Heading 6 ›</h6>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.</p>
  </div>
  ]

function Home() {
  return (
      <div className="container">
          <Hero />
          <Main content={content} />
        </div>
  );
}

export default Home;