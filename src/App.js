import Logo from './blocks/logo';
import TopNav from './blocks/topnav';
import Home from './home';
import Projects from './projects';
import Blog from './blog';
import BlogOne from './blogs/first-post';
import BlogTwo from './blogs/second-post';
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
      <Route path="rowanskye/home" element={<Home />} />
      <Route path="rowanskye/projects" element={<Projects />} />
      <Route path="rowanskye/blog" element={<Blog />} />
      <Route path="rowanskye/contact" element={<Contact />} />
      <Route path="rowanskye/blogs/first-post" element={<BlogOne />} />
      <Route path="rowanskye/blogs/second-post" element={<BlogTwo />} />
      <Route path="*" element={<Home />}></Route>
    </Routes>
    </div>
  );
}

export default App;
