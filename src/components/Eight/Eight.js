import React from 'react';
import "./Eight.css";

const Eight = () => {
  return (
    <div className='container eight'>
        <div className='row'>
            <div className='col-md-4 eight-content1'>
             <h2>Book an<br/> Appointment – Visit<br/> our Facility</h2>
             <h6>Book your appointment to visit our facility to experience the true senior friendly Assisted living that is premium, pleasant and peaceful as you would expect it to be.</h6>
            </div>
            <div className='col-md-8 eight-content2'>
             
            <div className='container'>
                <div className='contact-form row'>
                    <div className='form-field col-md-6'>
                       <input id='name' className='input-text' type="text" name=""/>
                       <label for="name" className='label'>Name*</label>
                    </div>
                    <div className='form-field col-md-6'>
                       <input id='email' className='input-text' type="email" name=""/>
                       <label for="email" className='label'>Email*</label>
                    </div>
                    <div className='form-field col-md-6'>
                       <input id='Location' className='input-text' type="text" name=""/>
                       <label for="Location" className='label'>Your Preferred Location*</label>
                    </div>
                    <div className='form-field col-md-6'>
                       <input id='number' className='input-text' type="text" name=""/>
                       <label for="number" className='label'>Phone Number*</label>
                    </div>
                    <div className='form-field col-md-8'>
                       <input id='text' className='input-text' type="text" name=""/>
                       <label for="text" className='label'>Why Us?</label>
                    </div>
                    <div className='form-field col-md-4'>
                       <input className='submit-btn' type="submit" value="submit" name=""/>
                    </div>
                </div>
            </div>
             
            </div>
        </div>
    </div>
  )
}

export default Eight