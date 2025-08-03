import React from 'react';
import './Modelstopcontent.scss';
import { useNavigate } from 'react-router-dom';
import { useBrand } from '../../../context/BrandContext';
import Halfellipse from "../../../assets/Halfellipse.png";
import ButterflyLogo from "../../../assets/ButterflyLogo.png";

export const Modelstopcontent = () => {
  const { selectedBrand: brand } = useBrand();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='model-main-container'>
      <div className='model-text-container'>
        <div className='back-logo-wrapper'>
          <div className='back-to-home' onClick={handleClick}>← Back to Home</div>

          <div className='model-full-logo'>
            <div className='model-logo'>
              <div className='model-half-logo'></div>
              <div className='model-second-half-logo'></div>
            </div>
            <span>VibeStrings</span>
          </div>
        </div>

        <h1>{brand?.name}</h1>
        <p>{brand?.origin}</p>
      </div>

      <div className='model-image-container'>
        <img src={Halfellipse} alt="Half ellipse" />
        {brand?.image && (
          <img src={brand.image} alt={`${brand.name} logo`} id='model-imagelogo' />
        )}
        <img src={ButterflyLogo} alt="VibeStrings Logo" className='butterfly-logo' />
      </div>
    </div>
  );
};
