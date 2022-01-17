
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Personal from './components/Personal';
import Students from './components/Students';
import Inicio from './components/Inicio';
import Menu from './components/Menu';

function App() {
  return (
    <div className='container'>
    <Router>
    <Menu></Menu>
    <Routes>
    <Route exact path='/' element={<Inicio/>}></Route>
    <Route path='/admin' element={<Admin/>}></Route>
    <Route path='/personal' element={<Personal/>}></Route>
    <Route path='/estudiantes' element={<Students/>}></Route>
    </Routes>

    </Router>
    
  </div>
  );
}

export default App;
