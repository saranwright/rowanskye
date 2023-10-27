import Hero from '../blocks/hero';
import Blogpost from '../blocks/blogpost';
import 'foundation-sites/dist/css/foundation.min.css';
//import { Button, ButtonGroup, Colors } from 'react-foundation';
import '../App.css';

const content = 
  [ <div>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
  </div>
  ]

function BlogTwo() {
  return (
      <div className="container">
          <Hero />
          <Blogpost content={content} title="Another Post Arrived" date="Thursday, October 26, 2023" />
        </div>
  );
}

export default BlogTwo;