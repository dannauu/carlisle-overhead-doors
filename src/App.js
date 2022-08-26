import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Service/Service';
import Commercial from './components/Commercial/Commercial';
import HeroMessage from './components/HeroMessage/HeroMessage';
import Gallery from './components/Gallery/Gallery';
import Residential from './components/Residential/Residential';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
    <Navbar />
    <HeroBanner/>
    <HeroMessage />
    <Service />
    <Residential />
    <Commercial />
    <Gallery />
    <Contact />
    {/* <ScrollToTop /> */}
    <Footer />
    </>
  );
}

export default App;
