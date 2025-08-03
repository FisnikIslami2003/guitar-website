import React from 'react'
import './Topcontent.scss'
import guitarImage from "../../../assets/topguitarimg.png";
import logo from "../../../assets/logo.png";
export const Topcontent = () => {
  return (
<div className='main-container'>
      <div className='text-container'>
        <div className='full-logo'>
      <div className='logo'>
        <div className='half-logo'>

        </div>
        <div className='second-half-logo'>

        </div>
      </div>
      <span >VibeStrings</span>
      </div>
      <h1>Browse top quality<br></br> <span style={{ color: 'orange' }}>Guitars</span> online</h1>
      <p>
        Explore 50k+ latest collections of branded guitars<br></br>
        online on VibeStrings
      </p>
    </div>

  <div className='image-container'>

     <img src={guitarImage} alt="" height={600}   width={700}/>
     <img src={logo} alt="" id='imagelogo' />
     
  </div>
      
    </div>
      
)
}
