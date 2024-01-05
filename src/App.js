import './App.css';
import { Routes,Route } from 'react-router-dom';
import Pfhome from './pages/Pfhome';
import Project from './pages/Project';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Footer from './components/Footer';
import Auth from './components/Auth';


function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Pfhome/>}/>
         <Route path='/login' element={<Auth/>}/>
         <Route path='/register' element={<Auth register/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/project' element={<Project/>}/>
         
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
