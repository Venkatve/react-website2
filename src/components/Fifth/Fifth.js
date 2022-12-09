import React from 'react';
import "./Fifth.css";

const Fifth = () => {
  return (
    <div className='container'>
        <div className='row fifth-content'>
            <h2>Assisted Living With A Customized Care</h2>
            <div className='col-md-6 content1'>
            <img src='../fifth1.png'/>
            </div>
            <div className='col-md-6 content1'>
              <p>As you embark on life post-retirement, your seniors require extra care that verifies all the touch-points in their elder life. Keeping this in mind, Athulya provides your seniors with customized care that is unique and personalized for your senior. It also allows your seniors to be fully in control of their time and decisions. With extensive facilities of medical care round the clock, Advanced technology for monitoring, healthy & nutritious food options, entertainment, wellness programs, and mindfulness activities - Athulya also lets you choose the rental ownership that is comfortable and best suited for your luxury retirement homes. Thus enabling you to decide the duration you want to stay with us.</p>
            </div> 
        </div>

        <div className='row fifth-content1'>
            <div className='col-md-6 content1'>
              <p>Athulya Assisted living also enables better networking with senior residents in the facility, preventing your elders from the stiffness of loneliness that consumes their mental health. Hence helping them live together and letting them feel in a senior living community. Your needs and the sensitivities of your seniors are our utmost priority, as a consequence, the entire dwelling is stitched together, best matched for their age and its challenges. Health being a primary concern, We have adopted a ‘Greenway of Living’, giving our residents healthy nutritious vegetarian food based on a customized diet plan suited for them. And by that, we try to build sound health in your seniors and improve their standard of healthy living.</p>
              <div>
                <div  className='smalll-content'>
                <div className='small-content'>
                    <img src='fifth3.png'/>
                    <h6>Networking & Communication</h6>
                </div>
                <div className='small-content'>
                <img src='fifth4.png'/>
                    <h6>Healthy & Nutritious Vegetarian Food</h6>
                </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 content1'>
            <img src='../fifth2.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Fifth