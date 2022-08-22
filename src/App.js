import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Navbar from './components/Navbar/Navbar';
import Service from './components/Service/Service';
import Commercial from './components/Commercial/Commercial';
import HeroMessage from './components/HeroMessage/HeroMessage';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <>
    <Navbar />
    <HeroBanner/>
    <HeroMessage />
    <Service />
    <Commercial />
    <Gallery />
    </>
  );
}

export default App;
