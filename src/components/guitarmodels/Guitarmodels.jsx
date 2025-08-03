import React from 'react';
import { useLocation } from 'react-router-dom';
import { Modelstopcontent } from './modelstopcontent';
import { Selection } from './selection';
import { Footer } from '../guitarbrands/footer';

export const Guitarmodels = () => {
  const location = useLocation();
  const brand = location.state?.brand;

  return (
    <div>
      <Modelstopcontent brand={brand} />
      <Selection   brand={brand}/>
      <Footer />
    </div>
  );
};
