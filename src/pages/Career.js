import React from 'react'
import home from '../images/home-pic.jpg'

function Career() {
  return (
    <div className='contact-page-main'>
      <div className='contact-page-grid-1'>
        <div className='contact-page-grid-1-bg-img'  style={{
      background: `url(${home})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity:"0.8",   
    }}
    
    >
          <div className='contact-page-grid-1-bgcolor'>
            <div className='row'>
              <div className='col'>
          <h1>Great Place to Work</h1>  
          <h5>Cultivating Talent, Nurturing Success</h5>
          </div>
          <div className='col'>
          <button >Apply Now</button>
          </div>
          </div>
          </div>
        </div>
      </div>
     <div className='career-page-grid-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <div class="card" >
  {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
  <div class="card-body">
    <h5 class="card-title">Next.js Developer</h5>
    <p class="card-text">Experience: 2+ Years</p>
    <button>Apply Now</button>
  </div>
</div>
          </div>
          <div className='col-md-6'>
          <div class="card" >
  {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
  <div class="card-body">
    <h5 class="card-title">Business Development Executive</h5>
    <p class="card-text">Experience: 0+ Years</p>
    <button>Apply Now</button>
  </div>
</div>
          </div>
        </div>
      </div>
     </div>



    </div>
  )
}

export default Career
