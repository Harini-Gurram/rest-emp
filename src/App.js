import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import EmpDetails from './EmpDetails';
import EmpCreate from './EmpCreate';
import EmpInfo from './EmpInfo';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpDetails/>}/>
        <Route path='/employee/create' element={<EmpCreate/>}/>
        <Route path='/employee/info/:empid' element={<EmpInfo/>}/>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
