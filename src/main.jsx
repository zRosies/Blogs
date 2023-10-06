import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Create from './pages/Create'
import Details from './pages/Details'
import UpdateDetails from './pages/UpdateDetails'

// import { FavoriteMoviesProvider } from "./components/Favorite";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
        <Routes>
          <Route element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='blog/:id' element={<Details/>}></Route>
            <Route path= 'update/:id' element={<UpdateDetails/>}></Route>
           
          </Route>
        </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
);