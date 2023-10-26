import Hero from './blocks/hero';
import Main from './blocks/main';
import 'foundation-sites/dist/css/foundation.min.css';
//import { Button, ButtonGroup, Colors } from 'react-foundation';
import './App.css';

const content = 
  [ <div>
     <h2>Projects ›</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
  </div>
  ]

function Projects() {
  return (
      <div className="container">
          <Hero />
          <Main content={content} />
        </div>
  );
}

export default Projects;