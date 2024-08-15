import React from 'react'
import {Navigate, Routes, Route} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {actionCreators} from '../state/index'
import { useState } from 'react';
import About from './About';
import Career from './Career';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';
import Tranning from './Tranning';
import Navbar from './Navbar';
import Login from './Login/Login';
import Signup from './Login/Signup';
import RefrshHandler from './Login/RefrshHandler';
// import Home2 from './Home2';


function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const baseUrl = "/ssmt-frontend";
  const baseUrl = "/ssmt-frontend";
  console.log(baseUrl);
  const dispatch = useDispatch();
  dispatch(actionCreators.urlFetch(baseUrl));
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="./Login/login" />
  }
  return (
    <>
        <div>
            <Navbar/>
            <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        </div>
       <Routes>
          <Route path={`${baseUrl}/about`} element={<About />} />
          <Route path={`${baseUrl}`} element={<Home />} />
          <Route path={`${baseUrl}/contact`} element={<Contact />} />
          <Route path={`${baseUrl}/portfolio`} element={<Portfolio />} />
          <Route path={`${baseUrl}/services`} element={<Services />} />
          <Route path={`${baseUrl}/tranning`} element={<Tranning />} />
          <Route path={`${baseUrl}/career`} element={<Career />} />
          <Route path={`${baseUrl}/*`} element={<Navigate to="./login" />} />
        <Route path={`${baseUrl}/login`} element={<Login />} />
        <Route path={`${baseUrl}/signup`} element={<Signup />} />
        <Route path={`${baseUrl}/home`} element={<PrivateRoute element={<Home />} />} />
         
         
        </Routes>
    </>
  )
}

export default Router
