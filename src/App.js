import './App.css';
import './paging/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paging/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
        <div className="app">
          <div className='content'>
            <Routes>
            <Route path='/' exact element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
