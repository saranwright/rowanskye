import Hero from './blocks/hero';
import Main from './blocks/main';
import 'foundation-sites/dist/css/foundation.min.css';
import { Button } from 'react-foundation';
import { Link } from 'react-router-dom';
import './App.css';

const content = 
  [ <div>
     <h2>An Auspicious First Post (Maybe)</h2>
     <p className="tagline">Thursday, October 26, 2023</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
     <Button isHollow ><Link to="../rowanskye/blogs/first-post">Read More »</Link></Button>
     <h2>Another Post Arrived</h2>
     <p className="tagline">Thursday, October 26, 2023</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
     <Button isHollow ><Link to="../rowanskye/blogs/second-post">Read More »</Link></Button>
  </div>
  ]

function Blog() {
  return (
      <div className="container">
          <Hero />
          <Main content={content} />
      </div>
  );
}

export default Blog;