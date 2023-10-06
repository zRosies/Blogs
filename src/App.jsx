
import {Outlet } from 'react-router-dom';
import Navbar from './navBar';
import './css/index.css'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
     
      

    </>
  )
}

export default App;