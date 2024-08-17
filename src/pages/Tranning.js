import React from 'react'
import training1 from '../images/training1.jpg'
import training2 from '../images/training2.jpg'
import training3 from '../images/training3.jpg'
import training4 from '../images/training4.jpg'

function Tranning() {



  return (
    <div className='training-page-main'>
      <div className='training-page-bg'>
      <div className='training-page-grid-1'>
        <div className='container' >
          <div className='training-page-top-text'>
            <h1>Training and Internship Program</h1>
            <h5>We offer a variety of training programs and internships to 
              help you enhance your skills and kickstart your career.</h5>
          </div>

          <div className='row'>
            <div className='col-sm'>
<button className='primary'>Training</button>
            </div>
            <div className='col-sm'>
            <button className='primary'>Internship</button>
            </div>
          </div>
          </div>
        </div>
      </div>
 <div className='training-page-grid-2-main'>
  <h1>Internship Opportunities</h1>
  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
      <div>
     <div className="card" >
  <img className="card-img-top" src={training1} alt="Card"/>
  <div className="card-body">
    <h5 className="card-title">Digital Marketing</h5>
    <p className="card-text">Gain hands-on experience through our dynamic digital marketing internship program</p>
  </div>
  
  
</div>
    </div>
      </div>
      <div className='col-md-6'>
      <div>
     <div className="card">
  <img className="card-img-top" src={training2} alt="Card"/>
  <div className="card-body">
    <h5 className="card-title">Business Development Executive</h5>
    <p className="card-text">Acquire practical skills with our engaging Business Development Executive internship program</p>
  </div>
  
  
</div>
    </div>
      </div>
    </div>
  </div>
 </div>


 <div className='training-page-grid-3-main'>
  
  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
      <div>
     <div className="card" >
  <img className="card-img-top" src={training3} alt="Card" />
  <div className="card-body">
    <h5 className="card-title">Java Developer</h5>
    <p className="card-text">Enhance your coding expertise with our immersive Java Developer internship program</p>
  </div>
  
  
</div>
    </div>
      </div>
      <div className='col-md-6'>
      <div>
     <div className="card" >
  <img className="card-img-top" src={training4} alt="Card" />
  <div className="card-body">
    <h5 className="card-title">React Developer</h5>
    <p className="card-text">Elevate your coding prowess with our exciting React Developer internship program</p>
  </div>
  
  
</div>
    </div>
      </div>
    </div>
  </div>
 </div>

    </div>
  )
}

export default Tranning
