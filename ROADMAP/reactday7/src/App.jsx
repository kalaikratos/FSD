
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
   <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>  
            <li>
              <Link to="/contact">Contact </Link>
            </li>
            <li>
              <Link to="/room/100">Room100 </Link>
            </li>  
            <li>
              <Link to="/room/200">Room200 </Link>
            </li>

          </ul>
        </nav>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route> 
          <Route path='/contact' Component={Contact}></Route>
          <Route path='/room/:wayne' Component={Room}></Route>
          
        </Routes>
      </div> 
      </Router>

  )
}

export default App
