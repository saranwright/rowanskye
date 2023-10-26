import Logo from './blocks/logo';
import TopNav from './blocks/topnav';
import Home from './home';
import Projects from './projects';
import Blog from './blog';
import Contact from './contact';
import 'foundation-sites/dist/css/foundation.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <TopNav />
      </header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
