import Header from './components/Header/Header.jsx'
import './App.css';
import Call from './components/Call/Call.js';
import Sponsors from './components/Sponsors/Sponsors.js';
import MiniStore from './components/MiniStore/MiniStore.js';
import GiftCards from './components/GiftCards/GiftCards.js';

function App() {
  return (
    <div className="App font-red-rose">
      <Header />
      <Call />
      <Sponsors />
      <MiniStore />
      <GiftCards />
    </div>
  );
}

export default App;
