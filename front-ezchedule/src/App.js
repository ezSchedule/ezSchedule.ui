import './App.css';
import AdvertisingBanner from './components/AdvertisingBanner';
import Arrow from './components/Arrow';
import Contact from './components/Contact';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="App">
      <Header />
      <AdvertisingBanner />
      <Arrow />
      <HowItWorks />
      <Contact />
    </div>
  );
}

export default App;
