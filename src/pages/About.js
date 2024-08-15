import React from 'react'
import homepic from '../images/home-pic.jpg'


function About() {
  return (
    <div>
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

         {/* step-2 */}

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
    <img className='home-pic2' class="grid-button grid-button--primary layout-element__component layout-element__component--GridButton" src={"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc29sdXRpb25zfGVufDB8fHx8MTcxNjQ2MDYzN3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=656&h=497"} alt="BigCo Inc. logo"/>
    </div>
    
  </div>
</div>


         {/* step-3 */}
<div className='home-grid-3'>
  
<div className="row">
    <div className="col-md-6">
   <div className='home-grid-3-images'>
   
  
    <div className='home-grid-3-pic-1-div' >
    <img className='home-grid-3-pic-1' src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwc29sdXRpb25zfGVufDB8fHx8MTcxNjQ2MDYzN3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=328&h=394' alt='home-pic'/>
    </div>
    <div className='home-grid-3-pic-2-div' >
    <img className='home-grid-3-pic-2' src='https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwc29sdXRpb25zfGVufDB8fHx8MTcxNjQ2MDYzN3ww&ixlib=rb-4.0.3&auto=format&fit=crop&w=263&h=344' alt='home-pic'/>
    </div>





   </div>
    </div>
    <div class="col-md-6">
   <h1 className='home-grid-3-h1'>Our Story at SSMT Solutions</h1>
   <h3 className='home-grid-3-h3'>Since our humble beginnings in 2020, we have focused on ethical work, integrity, and delivering the best results for our clients. Let us help you achieve higher conversion rates today.</h3>
    </div>
    
  </div>

</div>

         {/* Step-4 */}






    </div>
 
  )
}

export default About
