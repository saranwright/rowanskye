import Hero from './blocks/hero';
import Main from './blocks/main';
import 'foundation-sites/dist/css/foundation.min.css';
import { Button, ButtonGroup, Colors } from 'react-foundation';
import './App.css';

const content = 
  [ <div>
    <h2>Lorem ipsum dolor sit amet ›</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
     <ButtonGroup isExpanded className="intro">
          <Button isHollow color={Colors.SECONDARY}>Writing Projects »</Button>
          <Button isHollow color={Colors.SECONDARY}>Development Projects »</Button>
          <Button isHollow color={Colors.SECONDARY}>Design Work »</Button>
     </ButtonGroup>
     <h2>Home ›</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim blandit volutpat maecenas volutpat. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. </p>
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