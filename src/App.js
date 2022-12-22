import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className='bg-black homeBg'>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
