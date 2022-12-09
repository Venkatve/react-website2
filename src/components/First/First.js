import React from 'react';
import "./First.css";

const First = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <img src='../download.png'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active helo" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Life at Athulya</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Locations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search">
        <div className='first-phone'>
        98849 45900
        </div>
        <div className='first-email'>
        enquiry@athulyaliving.com
        </div>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default First