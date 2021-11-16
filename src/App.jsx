import React from 'react';
import Sport from './components/Sport';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sport className="sport-container" />
      <Footer className="footer-container" />
    </div>
  );
}

export default App;
