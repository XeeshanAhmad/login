import './App.css';
import './login.css'
import Login from './Login' 
import Signup from './Signup' 
import {Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link className='link' to='/'>Login</Link>
        <Link className='link' to='/signup'>Signup</Link>
      </nav>

      <Routes>
        <Route exact path='/' element={<Login /> }></Route>

        <Route path='signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
