import React from 'react'
import home from '../images/training.jpg'
import mail from '../images/mail-icon.png'
import whatsapp from '../images/whatsapp icon.jpg'
import skype from '../images/skype.png'


function Portfolio() {
  return (
    <div className='portfolio-page-main'>
      <div className='portfolio-page-grid-1'
      style={{
        background: `url(${home})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       
      }}
      >
        <div className='portfolio-page-bg'>
<h1>Our Portfolio: Where Innovation Meets Excellence</h1>
<p>Connect with Us to Unlock Portfolio Insights</p>
       
       <img src={mail} alt='msg' /><img src={skype} alt='skype' /><img src={whatsapp} alt='whats' />
        </div>
        
      </div>
   
    </div>
  )
}

export default Portfolio
