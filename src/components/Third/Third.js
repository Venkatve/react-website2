import React from 'react';
import "./Third.css";

const Third = () => {
  return (
    <div className='container-fluid third-container'>
     <div className='row third-content'>
        
        <div className='col-md-6 third-text'> 
        <h2 >Athulya locations:</h2>
        <p>Our Assisted living facilities help you give the feel of a ‘home away from home and a sense of safety because of the locality they are situated in. The Assisted Living facilities are provided in the heart of the city accessible for the elderly to have family member visits and even enable addressing their medical emergencies in just a few minutes. Athulya Assisted Living operates in two cities in Chennai and Bangalore.</p>
        </div>
        <div className='col-md-3 third-img'> 
<img src='third1.jpg'/>
<h2>Chennai</h2>

        </div>
        <div className='col-md-3 third-img'> 
        <img src='third2.jpg'/>
        <h2>Bangalore</h2>
        </div>
        
     </div>
    </div>
  )
}

export default Third