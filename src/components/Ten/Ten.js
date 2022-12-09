import React from 'react';
import "./Ten.css";

const Ten = () => {
  return (
    <div className='container-fluid ten'>
        <h2>Athulya Gallery</h2>
        <div className='row '>
            <div className='col-md-3 ten-img'>
              <img src='../101.jpg'/>
            </div>
            <div className='col-md-3 ten-img'>
              <img src='../102.jpg'/>
            </div>
            <div className='col-md-3 ten-img'>
              <img src='../103.jpg'/>
            </div>
            <div className='col-md-3 ten-img'>
              <img src='../104.jpg'/>
            </div>
        </div>
        <div className='row ten2'>
            <div className='col-md-3 ten-img'>
              <img src='../105.jpg'/>
            </div>
            <div className='col-md-3 ten-img'>
              <img src='../106.jpg'/>
            </div>
            <div className='col-md-3 ten-img'>
              <img src='../107.jpg'/>
            </div>
            <div className='col-md-3 ten-img'>
              <img src='../108.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Ten