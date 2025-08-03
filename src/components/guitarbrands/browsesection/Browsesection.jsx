import React from 'react'
import './Browsesection.scss'
import Googleplay from '../../../assets/GooglePlay.png';
import Appstore from '../../../assets/Appstore.png';
import Guitars3 from '../../../assets/Guitar s3.png';
import Guitars1 from '../../../assets/Guitar s1.png';
import Ellipse from '../../../assets/Ellipse.png';





export const Browsesection = () => {
  return (
    <div className='main-browsesection'>
      <div className='firstbrowsdiv'>
  <h1>Browse and buy your <br></br> <span style={{ color: 'darkorange' }}> favorite guitars</span> with <br></br>VibeStrings.</h1>
    <img src={Googleplay} className='googleplay'></img>
        <img src={Appstore} className='appstore' ></img>
     </div>
  <div className='secondbrowsediv'>
  <div className='guitar-images'>
    <img src={Guitars3} alt="Guitar 3" />
    <img src={Guitars1} alt="Guitar 1" />
  </div>
  <img src={Ellipse} alt="Ellipse" className='ellipse' />
</div>

    </div>
  )
}
