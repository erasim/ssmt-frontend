import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import contactpic from '../images/contact-pic.jpg'
import locationlogo from '../images/location logo.jpg'
import mailicon from '../images/mail-icon.png'
import phnicon from '../images/phone icon.png'
import whatsicon from '../images/whatsapp icon.jpg'
import { handleError, handleSuccess } from '../utils';
import { useSelector } from 'react-redux';

function Contact() {



  const [contactDetail, setcontactDetail] = useState({
    name: '',
    email: '',
    messege: ''
  });
  const navigate = useNavigate();
  const baseUrl = useSelector(state=>state.baseUrl);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copycontactDetail = { ...contactDetail };
    copycontactDetail[name] = value;
    setcontactDetail(copycontactDetail);
}
// console.log(contactDetail);
const handleFormC = async (e) => {
  e.preventDefault();
  const { name, email, messege } = contactDetail;
  if (!name || !email || !messege) {
      return handleError('name, email and messege are required')
  }

  try {
           
    // const url = `http://localhost:8080/auth/signup`;
    const url =  `https://ssmt-server.vercel.app/auth/signup`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactDetail)
    });
    const result = await response.json();
    const { success, message, error } = result;
    if (success) {
        handleSuccess(message);
        setTimeout(() => {
            navigate(`${baseUrl}/login`)
        }, 1000)
    } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
    } else if (!success) {
        handleError(message);
    }
    console.log(result);
} catch (err) {
    handleError(err);
}
}










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

              <form >
                <div className="form-group">
                  <label for="exampleInputEmail1">Full Name</label>
                  <input type="name" onChange={handleChange} className="form-control" id="exampleInputEmail1" name='name' aria-describedby="nameHelp" placeholder="Full Name" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" onChange={handleChange} class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Enter your message*</label>
                  <textarea rows={4} cols={50} onChange={handleChange} class="form-control" name='messege' placeholder='type your message' />
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
                4143 SETON DEIVE SE, <br /> CALGARY, ALBERTA, <br />
                CANADA. T3M 3A6
              </span>
              <br /><br /><br /><br /><br />
              <br /><img src={mailicon} alt='mail-icon' /> <span>4143 SETON DEIVE SE, </span>
              <br /> <img src={phnicon} alt='phone-icon' /><span>CALGARY, ALBERTA, </span>
              <br /> <img src={whatsicon} alt='whatsapp-icon' /><span>CANADA. T3M 3A6 </span>



            </div>
            <div className='col-md-8'>
              <div >
                <iframe title="myAddress" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=28.51987296820083,%2079.57941412925722+(zaidi%20auto)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a>
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
