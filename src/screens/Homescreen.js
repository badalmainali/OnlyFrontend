import React, { useState, useEffect } from 'react'

import 'antd/dist/antd.css';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Homescreen() {

    
    //showing part starts from here
    return (
        <div className='container'>

            <h4 style={{ textAlign: 'center' }} className='mt-3'>Book for your favourite destinations..</h4>
            <hr></hr>
            <div className='row' >
                <div className='col-md-3 datebar' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                   
                </div>
                <div className='col-md-5 searchbar' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <input type='text' className='form-control' placeholder='Search..' 
                    />
                </div>

            </div>
            <div className='row justify-content-center mt-5'>
               
            </div>

        </div>
    );
}

export default Homescreen