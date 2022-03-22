<<<<<<< Updated upstream
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
=======
//import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import { AuctionProvider } from "./context/AuctionContext";

function App() {
  return (
    <AuctionProvider>
     <Router>
      
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <NavBar />
                
                </>
              }
            />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>  
    </AuctionProvider>
>>>>>>> Stashed changes
  );
}

export default App;
