import React from 'react'
import homepic from '../images/home-pic.jpg'

function Home2() {
  return (
    <div>
      <h1>Home page -2</h1>
      <div className="blocks">
        <section id="zR2LTF" className="block block--desktop-first-visible block--mobile-first-visible">
      <div className='background-img'>
      
      <img className='home-pic' src={homepic} alt="homr-pic"/>
      <div className="block-background__overlay"></div>  
      </div>
      <div class="block-layout block-layout--layout">
        <div class="layout-element layout-element--layout layout-element transition transition--slide">
            <div class="text-box layout-element__component layout-element__component--GridTextBox">
                <h1 dir="auto">Empowering with revolutionary digital evolution solutions.</h1></div></div></div>


      </section>
    </div>
    
    </div>
  )
}

export default Home2
