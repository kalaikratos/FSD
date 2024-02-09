import './App.css';
import NavBar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="container">
      <div className='container-fluid'>
        <NavBar />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/Cart' Component={Cart}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;