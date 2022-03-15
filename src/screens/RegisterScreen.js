import React, { useState, useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function RegisterScreen() {
  
  

  return (
    <div>
     


      <p className='reg'>R E G I S T E R</p>


      <div className='row m-4 register'>

        <div div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="3000" className='col-md-4 lreg '>

          <img alt='' className='img bigimgs' src={process.env.PUBLIC_URL + '/images/register.jpg'} />

        </div>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className='col-md-6 rreg '>
          <div className='input-reg '>
            <p className='regtxt'>R E G I S T E R - U S E R</p>
            <input type='text' className='form-control' placeholder='Name'  />
            <input type='text' className='form-control' placeholder='Email'  />
            <input type='text' className='form-control' placeholder='Phone'  />
            <input type='password' className='form-control' placeholder='Password' />
            <input type='password' className='form-control' placeholder='Confirm Password' />
            <button className='btn btn-secondary btn-reg'>Submit</button>
            <p className='lgns'>Not new? <a className='lgn' href='/login' >Login</a></p>

          </div>
          

        </div>
      </div>
    </div>
  )
}

export default RegisterScreen