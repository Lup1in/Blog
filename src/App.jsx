import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
