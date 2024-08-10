import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="app-container">
        <div className="header-nav-container">
          <Header />
          <Nav />
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
