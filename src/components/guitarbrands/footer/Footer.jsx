import React from 'react'
import './Footer.scss'
import Butterfly from '../../../assets/Butterfly.png'
import Sms from '../../../assets/sms.png'
import Location from '../../../assets/location.png'
import Facebook from '../../../assets/facebook.png'
import Twitter from '../../../assets/Twitter.png'
import Instagram from '../../../assets/Instagram.png'





export const Footer = () => {
  return (
    <div className='main-footer-container'>
    <div className='footer-vibestrings'>
      <div className='butterfly-container'>
        <img src={Butterfly} alt="" />
        <h1>Vibestrings</h1>
        </div>
        <div className='butterfly-container'>
        <img src={Sms} alt="" />
        <p>Enquiry@VibeStrings.com</p>
        </div>
        <div className='butterfly-container'>
        <img src={Location} alt="" />   
            <p>San Francisco</p>
          </div>  
 </div>

<div className='footer-pages'>
    <h4 >PAGES</h4>
    <p>Store</p>
    <p>Collections</p>
    <p>Support</p>


</div>
<div className='footer-pages'>
    <h4 >Product</h4>
    <p>Terms</p>
    <p>Privacy Policy</p>
    <p>Copyright</p>


</div>
<div className='follows-footer'>
<h4>Follow us</h4>
       <div className='social-media'>
        <img src={Facebook} alt="" />   
        <img src={Twitter} alt="" />   
        <img src={Instagram} alt="" />   
       </div>


</div>
</div>

   
  )
}
