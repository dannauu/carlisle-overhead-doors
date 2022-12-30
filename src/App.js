import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import LogoSlider from './components/LogoSlider/LogoSlider';

// carlisledoors.com

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  return (
    <div className='bg-black homeBg sm:bg-center'>
      <nav className="sm:px-4">
        <div className="flex flex-wrap text-center mx-auto">
          <h1 className="text-black font-semibold text-2xl flex m-auto logoFont sm:text-lg">Carlisle Overhead Doors & Services</h1>
          <div className="flex m-auto">
            <ul className="flex flex-row p-4 text-black googleFont text-xl sm:text-xs">
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
      {currentRoute === 'home' && <div className='h-screen'>
        <LogoSlider/>
        <div className='relative top-12 sm:top-96'>
          <p className='text-6xl font-bold pl-10 sm:text-2xl'><span className='text-red-700'>Top Notch </span>garage <br></br> door installation <br></br> and services <br></br> that you can<br></br> count on <span className='text-red-700'>24/7</span>.</p>
          <a onClick={() => setCurrentRoute('services')} className='font-medium text-2xl bg-red-700 text-white rounded p-2 relative left-40 top-6 cursor-pointer sm:text-lg sm:left-10'>Learn more</a>
        </div>
      </div>}
      {currentRoute === 'about' && <About />}
      {currentRoute === 'services' && <Services />}
      {currentRoute === 'gallery' && <Gallery />}
      {currentRoute === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}


export default App;
