import React from 'react'
import contactpic from '../images/contact-pic.jpg'
import locationlogo from '../images/location logo.jpg'
import mailicon from '../images/mail-icon.png'
import phnicon from '../images/phone icon.png'
import whatsicon from '../images/whatsapp icon.jpg'

function Contact() {
  return (
    <div className='contact-page-main'>
      <div className='contact-page-main-div'>
      <h1>How Can We Help You</h1>
      <h5>Welcome to SSMT solutions,
         the leading tech digital marketing
          provider. Contact us for
           innovative solutions and 
           higher conversion rates.</h5>
      </div>
      <div className='contact-page-grid-1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>

            <div className='contact-page-grid-1-pic'>
              <img src={contactpic} alt='contact-pic' />
            </div>

    </div>

            <div className='col-md-6'>
         
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Full Name" />
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Enter your message*</label>
<textarea rows={4} cols={50} class="form-control" placeholder='type your message' />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
           </div>
            
          </div>
        </div>


      </div>

      <div className='contact-grid-2-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4' id='contact-grid-2-left'>
              <h1>SSMT Solutions</h1>
            
                <img src={locationlogo} alt='location-icon' /> <span>
                4143 SETON DEIVE SE, <br/> CALGARY, ALBERTA, <br/>
                CANADA. T3M 3A6
                </span>
<br/><br/><br/><br/><br/>
<br/><img src={mailicon} alt='mail-icon'/> <span>4143 SETON DEIVE SE, </span>
<br/> <img src={phnicon} alt='phone-icon'/><span>CALGARY, ALBERTA, </span>
<br/> <img src={whatsicon} alt='whatsapp-icon'/><span>CANADA. T3M 3A6 </span>
               
             
             
            </div>
            <div className='col-md-8'>
            <div >
              <iframe title="myAddress"   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28.51987296820083,%2079.57941412925722+(zaidi%20auto)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
