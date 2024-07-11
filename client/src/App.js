import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './components/homepage/homepage';
import { AddTask } from './components/addtask/addtask';
import { Taskdetail } from './components/taskdetails/taskdetail';
import { Taskupdate } from './components/update/taskupdate';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addtask' element={<AddTask/>}/>
    <Route path='/taskdetail' element={<Taskdetail/>}/>
    <Route path='/taskdetail' element={<Taskdetail/>}/>
    <Route path='/taskupdate/:id' element={<Taskupdate/>}/>
    
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
