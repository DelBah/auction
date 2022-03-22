import { Route, Routes } from 'react-router';
import TestCont from './components/TestCont';
import { AuctionProvider } from './context/AuctionContext';

function App() {
  return (
    <div className="App">
    <AuctionProvider>  
      <header className="App-header">

      </header>

      <div className="content">
        <Routes>
          <Route exact path='/' element={<TestCont/>} />
        </Routes>
      </div>
      </AuctionProvider>  
    </div>
  );
}

export default App;
