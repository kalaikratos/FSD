
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Homepage';
import FSD from './FSD';
import DS from './DS';
import CS from './CS';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/FSD' element={<FSD />} />
    <Route path='/DS' element={<DS />} />
    <Route path='/CS' element={<CS />} />
    
  
   </Routes>
   </BrowserRouter>
  );
}

export default App;