import React from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router> {
      <div className="app-container">
        <div className="header-nav-container">
          <Header />
          <Nav />
        </div>
        <Main />
        <Footer />
      </div>
      };
    </Router>
  );
};

export default App;
