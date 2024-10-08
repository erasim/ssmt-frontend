import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import './navbar.css';
import logo from '../images/logo.svg'
import { FiAlignJustify } from "react-icons/fi";
import {handleSuccess } from '../utils';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {actionCreators} from '../state/index'



export default function Navbar(setIsAuthenticated) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const baseUrl = useSelector(state=>state.baseUrl);

 
 
  useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])
  const user = useSelector(state=>state.user);
console.log(loggedInUser);

  const handleLogout = (e) => {
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      handleSuccess('User Logout');
      setLoggedInUser(localStorage.getItem('loggedInUser'))
      dispatch(actionCreators.userLogin(''));
      setTimeout(() => {
        navigate(`${baseUrl}/login`);
    }, 1000)
  }

 
 
  
  


  return (
<>
    <nav className='navbar' >
    <ul className='nav-ul'>
    <img className='nav-img' src={logo} alt="BigCo Inc. logo"/>
    <div className='li-tag'>
      <li className='nav-li'>
        <Link className='link' to= {`${baseUrl}/`}>Home</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/about`}>About</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/contact`}>Contact</Link>
      </li>
   
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/portfolio`}>Portfolio</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/services`}>Services</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/tranning`}>Tranning</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/career`}>Career</Link>
      </li>
      <li className='nav-li'>
        {user ? <Link className='link' onClick={handleLogout} >Logout</Link> 

       : <Link className='link' to={`${baseUrl}/login`} >Login</Link>
       }  
   {user ? <span className='profilename'>{user}</span>:null}
      </li>
      </div>
      <button className='nav-icon' onClick={() => setShow(!show)} > 
           <FiAlignJustify /></button>
      {show  && <div className='nav-mobile-view' >
        

        {/* Mobile view */}


        <ul className='nav-ul'>
    <img className='nav-img' src={logo} alt="BigCo Inc. logo"/>
    <div className='li-tag-mob'>
    <li className='nav-li'>
        <Link className='link' to= {`${baseUrl}/`}   onClick={() => setShow(!show)}>Home</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/about`}  onClick={() => setShow(!show)}>About</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/contact`}   onClick={() => setShow(!show)}>Contact</Link>
      </li>
   
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/portfolio`}   onClick={() => setShow(!show)}>Portfolio</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/services`}  onClick={() => setShow(!show)}>Services</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/tranning`}    onClick={() => setShow(!show)}>Tranning</Link>
      </li>
      <li className='nav-li'>
        <Link className='link' to={`${baseUrl}/career`}    onClick={() => setShow(!show)}>Career</Link>
      </li>
      <li className='nav-li'>
        {user ? <Link className='link' onClick={handleLogout} >Logout</Link> 

       : <Link className='link' to={`${baseUrl}/login`}      onClick={() => setShow(!show)}>Login</Link>
       }  
   {user ? <span className='profilename'>{user}</span>:null}
   
      
      </li>
      </div>
    </ul>
        
        </div>}
    </ul>
   
  </nav>
  </>
    )
}

