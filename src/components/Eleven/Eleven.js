import React from 'react';
import "./Eleven.css";

const Eleven = () => {
  return (
    <div className='container-fluid eleven-container'>
     <div className='row eleven-content'>
        
        <div className='col-md-5 eleven-text'> 
        <h2 >Athulya Activities</h2>
        <p>We at Athulya Assisted living engage seniors with mindful and fun activities to help them eradicate the idleness they might face. These activities help our seniors to improve or keep intact their cognitive sensitivities and also give them a sense of satisfaction. We not only limit fun and entertainment activities yet also organize activities like health talks by doctors, enriching them with information. Providing seniors with an opportunity to participate in these activities helps them connect with fellow senior citizens positively, resulting in a good social life.</p>
        </div>
        <div className='col-md-7 eleven-content1'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  
  <div className="carousel-inner">
     <div className="carousel-item active">
    <div className='row'>
        <div className='col-md-6'>
            <div className='boxx'>
            <img src='../112.jpg'/>
             <h4>Paper Craft</h4>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='boxx'>
             <img src='../111.jpg'/>
             <h4>Dussehra</h4>
            </div>
        </div>
    </div>
     </div>
     <div className="carousel-item ">
    <div className='row'>
        <div className='col-md-6'>
            <div className='boxx'>
            <img src='../113.jpg'/>
             <h4>Ramp Walk</h4>
            </div>
        </div>
        <div className='col-md-6'>
            <div className='boxx'>
             <img src='../114.jpg'/>
             <h4>Clay Modelling</h4>
            </div>
        </div>
    </div>
     </div>
  </div>
  <button className="carousel-control-prev bg-primary icon" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next bg-primary icon1" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div></div>
        </div>

</div>
        
     
    
  )
}

export default Eleven

