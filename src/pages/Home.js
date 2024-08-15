import React, { useEffect, useState } from 'react'
import { handleError } from '../utils';
import { ToastContainer } from 'react-toastify';
import homepic from '../images/home-pic.jpg'

function Home() {

  const [products, setProducts] = useState('');
  const fetchProducts = async () => {
      try {
          // const url = "https://deploy-mern-app-1-api.vercel.app/products";
          const url = `http://localhost:8080/auth/products`;
          const headers = {
              headers: {
                  'Authorization': localStorage.getItem('token')
              }
          }
          const response = await fetch(url, headers);
          const result = await response.json();
          console.log(result);
          setProducts(result);
      } catch (err) {
          handleError(err);
      }
  }
  useEffect(() => {
      fetchProducts()
  }, [])

  
  return (
    <div className='home'>


    <div
    className='home-main'   style={{
      background: `url(${homepic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:"90%",
      
      
    }}>
       
<div className='home-text'>
         <h1 className='home-heading1'>
         Empowering with revolutionary 
         digital evolution solutions.
         </h1>
         <h2 className='home-heading2'>
         Leading the Way in Digital Marketing 
         Solutions for Your Business Success
         </h2>
         <button id='home-btn1' type="button" className="btn btn-outline-secondary">Explore</button>
         </div>
         </div>

         <div id='home-div' className="container">
  <div className="row">
    <div className="col-md-6">
      <p className='home-text2-header'>
      Welcome to SSMT Solutions
      </p>
      <p className='home-text2'>
      SSMT Solutions stands as a leading provider of tech-driven digital marketing solutions, committed to excellence, agility, and creativity in a dynamic landscape. What began humbly in a modest space in 2020 has now evolved into a reputable entity within the industry. Our ethos revolves around a dedication to superior performance, ethical conduct, integrity, and optimal outcomes. Over the years, we've carved a niche for ourselves in a fiercely competitive arena. Proficient in crafting impactful digital strategies, we enable our clients to achieve enhanced conversion rates.
      </p>
      <button id='home-btn2' type="button" className="btn btn-outline-secondary">Connect</button>
    </div>
    <div class="col-md-6">
    <img className='home-pic2' src={"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc29sdXRpb25zfGVufDB8fHx8MTcxNjQ2MDYzN3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=656&h=497"} alt="BigCo Inc. logo"/>
    </div>
    
  </div>
</div>


    </div>

  )
}

export default Home
