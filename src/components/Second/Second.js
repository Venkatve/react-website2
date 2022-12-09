import React from 'react';
import "./Second.css";

const Second = () => {
  return (
    <div >
        <div className='container-fluid second'>
            <div className='row '>
                <div className='col-md-6'>
                    <div className='second-content'>
                 <h2><span>Athulya Assisted Living</span> - Making A <br/> Difference With Senior Living In India</h2><br/><br/>
                  <p>
                  Athulya, first of its kind premium independent Assisted living homes in India creates indulgence for seniors living at its facilities that are specially designed to meet the needs of aging. Athulya, true to what it conveys - ‘Unique’, is one of the first providers of Assisted living in India with optimum senior living features.<br/><br/><br/>

                  With a team of skilled and experienced senior healthcare professionals, Athulya keeps intact the needs of a premium home for senior citizens and the emotions that back it. With advanced monitoring equipment and technology-oriented care, Athulya strives to provide a safe and secure environment for senior living that inculcates resonance and weaves quintessential moments in the significant phase of your senior's life.
                  </p>
                <button className='second-button'>Book an Appointment <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button></div>
                </div>
                <div className='col-md-6 '>
                 <div className='second-img'>
                 <img src='../second.jpg'/>
                 </div>
                    
                 
                  
                
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Second