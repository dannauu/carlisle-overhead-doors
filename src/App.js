import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  return (
    <div className='bg-black homeBg'>
      <nav className="sm:px-4">
        <div className="flex flex-wrap text-center mx-auto">
          <h1 className="text-black font-semibold text-4xl flex m-auto logoFont">Carlisle Overhead Doors & Services</h1>
          <div className="flex m-auto">
            <ul className="flex flex-row p-4 text-black googleFont text-xl">
              <li>
                <a href="#" className="pr-5" onClick={() => setCurrentRoute('home')}>Home</a>
              </li>
              <li>
                <a href="#" className="pr-5" onClick={() => setCurrentRoute('about')}>About</a>
              </li>
              <li>
                <a href="#" className="pr-5" onClick={() => setCurrentRoute('services')}>Services</a>
              </li>
              <li>
                <a href="#" className="pr-5" onClick={() => setCurrentRoute('gallery')}>Gallery</a>
              </li>
              <li>
                <a href="#" className="" onClick={() => setCurrentRoute('contact')}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {currentRoute === 'home' && <Home />}
      {currentRoute === 'about' && <About />}
      {currentRoute === 'services' && <Services />}
      {currentRoute === 'gallery' && <Gallery />}
      {currentRoute === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
