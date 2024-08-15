import React from 'react';
import servicesPic1 from '../images/services-img-1.jpg'
import servicesPic2 from '../images/services-img-2.jpg'
import servicesPic3 from '../images/services-img-3.jpg'
import servicesPic4 from '../images/services-img-4.jpg'
import servicesPic5 from '../images/services-img-5.jpg'
import servicesPic6 from '../images/services-img-6.jpg'
import servicesPic7 from '../images/services-img-7.jpg'
import servicesPic8 from '../images/services-img-8.jpg'

function Services() {

  return (
    <div className='services-main'>
      <div className=' services-heading'>
<h1>Our Services</h1>
<h3>Your Path to Excellence</h3>

      </div>
      
<div className='services-cart-box'>
<div className="container">
  <div className="row">
    <div className="col-md-4">
    <div className="card"  >
  <img className="card-img-top" src={servicesPic1} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">UI/UX Design</h5>
    <p className="card-text">Receive tailored, intuitive UI/UX designs that captivate users.</p>
  </div>
</div>    
    </div>
    <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic2} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">Web Development</h5>
    <p className="card-text">Get custom, responsive website designs that stand out.</p>
  </div>
</div>  
    </div>
    <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic3} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">Mobilr Application Development</h5>
    <p className="card-text">Get custom mobile app development for Android, iOS, and Hybrid platforms that impress.</p>
  </div>
</div>  
    </div>
</div>





<div className="row">
    <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic4} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">Graphic Design & Digital Marketing</h5>
    <p className="card-text">Access custom digital marketing solutions that propel your business forward.</p>
  </div>
</div>    
    </div>
    <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic5} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">IT Support & Consultancy</h5>
    <p className="card-text">Unlock tailored IT consultancy and support services to propel your business forward.</p>
  </div>
</div>  
    </div>
    <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic6} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">Salesforce</h5>
    <p className="card-text">Enhance your business with customized Salesforce solutions designed to optimize your operations and drive growth.</p>
  </div>
</div>  
    </div>
</div>








<div className="row">
    <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic7} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">AI Solutions</h5>
    <p className="card-text">Get custom AI solutions that elevate your business with cutting-edge intelligence.</p>
  </div>
</div>    
    </div>
    <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic8} alt="Card" />
  <div className="card-body">
    <h5 className="card-title">Cybersecurity</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>  
    </div>
    {/* <div className="col-md-4">
    <div className="card" >
  <img className="card-img-top" src={servicesPic1} alt="pic" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Get custom cybersecurity solutions that protect and secure your digital assets effectively.</p>
  </div>
</div>  
    </div> */}
</div>



  







</div>


</div>
    </div>
  )
}

export default Services
