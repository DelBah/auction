import './App.css';
import { AuctionProvider } from './context/AuctionContext';

function App() {
  return (
    <div className="App">
    <AuctionProvider>
      <header className="App-header">
       
      </header>
      </AuctionProvider>  
    </div>
  );
}

export default App;
