import React from 'react';
import "./Nine.css";

const Nine = () => {
  return (
    <div className='container nine'>
        <h1>Athulya Videos</h1>
        <div className='row'>
            <div className='col-md-6 nine-content'>
            <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/tJDNjynRjkU" title="YouTube video" allowfullscreen></iframe>
</div>
<h3>Pallavaram - Virtual Tour</h3>
            </div>

            <div className='col-md-6 nine-content'>
            <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/CNEy35EXmKw" title="YouTube video" allowfullscreen></iframe>
</div>
<h3>Arumbakkam - Virtual Tour</h3>
            </div>
        </div>
    </div>
  )
}

export default Nine