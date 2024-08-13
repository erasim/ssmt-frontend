import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import './navbar.css';
import logo from '../images/logo.svg'
import { FiAlignJustify } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import {handleSuccess } from '../utils';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
// import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'



export default function Navbar(setIsAuthenticated) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState('');
 
  const navigate = useNavigate();
 
  useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])
  // const amount = useSelector(state=>state.amount);
  const user = useSelector(state=>state.user);


  const handleLogout = (e) => {
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      handleSuccess('User Logout');
      setLoggedInUser(localStorage.getItem('loggedInUser'))
      dispatch(actionCreators.userLogin(''));
      // window.location.reload();

      // setTimeout(() => {
      //     navigate('./Login/Login');
      // }, 1000)
  }

  
   
  


  return (

    <nav className='navbar' >
    <ul className='nav-ul'>
    <img className='nav-img' src={logo} alt="BigCo Inc. logo"/>
    <div className='li-tag'>
      <li className='nav-li'>
        <Link className='link' to="/">Home</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/about">About</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/contact">Contact</Link>
      </li>
   
      <li className='nav-li'>
        <Link className='link' to="/portfolio">Portfolio</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/services">Services</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/tranning">Tranning</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/career">Career</Link>
      </li>
      <li className='nav-li'>
        {user ? <Link className='linkbtn' onClick={handleLogout} >Logout</Link> 

       : <Link className='linkbtn' to="./login" >Login</Link>
       }  
   {user ? <span className='profilename'>{user}</span>:null}
   
      
      </li>

     
      </div>

      
      <button className='nav-icon' onClick={() => setShow(!show)}> 
           <FiAlignJustify /></button>
      {show && <div className='nav-mobile-view'>
        
        <ul className='nav-ul'>
    <img className='nav-img' src={logo} alt="BigCo Inc. logo"/>
    <div className='li-tag-mob'>
      <li className='nav-li'>
        <Link className='link' to="/">Home</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/about">About</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/contact">Contact</Link>
      </li>
   
      <li className='nav-li'>
        <Link className='link' to="/portfolio">Portfolio</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/services">Services</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/tranning">Tranning</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/career">Career</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to="/login">Login</Link>
       
      </li>
      </div>
    </ul>
        
        </div>}
    </ul>
   

    {/* <button> Balance-{user}</button> */}
  </nav>
  
    )
}

