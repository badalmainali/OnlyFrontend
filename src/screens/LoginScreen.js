import React,{useState,useEffect} from 'react'


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function LoginScreen() {

  


  
  return (
    <div>
       <p className='reg'>L O G I N</p>
      
    
      
        <div className='row m-4 login'>
        
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='col-md-8 rreg '>
         
          <div className='input-reg '>
            <p className='regtxt lgnhd'>L O G I N - U S E R</p>
            
            <input type='text' className='form-control' placeholder='Email'  />
            
            <input type='password' className='form-control' placeholder='Password'  />


          
            <button className='btn btn-secondary btn-reg'  >Login</button>
            <p className='lgns'>You can register from, <a className='lgn' href='/register' >Register</a></p>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LoginScreen