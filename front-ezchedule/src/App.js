import './App.css';
import AdvertisingBanner from './components/AdvertisingBanner';
import Arrow from './components/Arrow';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="App">
      <Header />
      <AdvertisingBanner />
      <Arrow />
      <HowItWorks />
    </div>
  );
}

export default App;
