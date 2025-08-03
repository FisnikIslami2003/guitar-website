import React from 'react';
import './Guitarstopcontent.scss';
import { useNavigate } from 'react-router-dom';
import Halfellipse from "../../../assets/Halfellipse.png";
import ButterflyLogo from "../../../assets/ButterflyLogo.png";

export const Guitarstopcontent = ({ model }) => {
  const navigate = useNavigate();

  return (
    <div className='guitarstop-main-container'>
      <div className='guitarstop-text-container'>
        <div className='guitarstop-back-logo-wrapper'>
          <div className='guitarstop-back-to-home' onClick={() => navigate('/guitarmodels')}>
            ← Back to Home
          </div>

          <div className='guitarstop-full-logo'>
            <div className='guitarstop-logo'>
              <div className='guitarstop-half-logo'></div>
              <div className='guitarstop-second-half-logo'></div>
            </div>
            <span>VibeStrings</span>
          </div>
        </div>

        <h1>{model?.name}</h1>
        <p>{model?.type}</p>
      </div>

      <div className='guitarstop-image-container'>
        <img src={Halfellipse} alt="Half ellipse" />

        {model?.image && (
          <img src={model.image} alt={model.name} id='guitarstop-imagelogo' />
        )}

        <img
          src={ButterflyLogo}
          alt="VibeStrings Logo"
          className='guitarstop-butterfly-logo'
        />
      </div>
    </div>
  );
};
