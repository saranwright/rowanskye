import Logo from './logo';
import TopNav from './topnav';
import Hero from './hero';
import Main from './main';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <TopNav />
        <div className="container">
          <Hero />
          <Main />
        </div>
        
      </header>
    </div>
  );
}

export default App;
