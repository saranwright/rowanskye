import Logo from './logo';
import TopNav from './topnav';
import Hero from './hero';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <TopNav />
        <Hero />
      </header>
    </div>
  );
}

export default App;
