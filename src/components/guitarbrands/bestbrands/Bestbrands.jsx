import React from 'react';
import './Bestbrands.scss';
import { useQuery } from '@apollo/client';
import { GET_ALL_BRANDS } from '../../../graphql/queries';
import { useNavigate } from 'react-router-dom';
import { useBrand } from '../../../context/BrandContext';

export const Bestbrands = () => {
  const { loading, error, data } = useQuery(GET_ALL_BRANDS);
  const navigate = useNavigate();
  const { setSelectedBrand } = useBrand();


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading brand logos.</p>;

  const handleBrandClick = (brand) => {
    navigate('/guitarmodels', { state: { brand } });
      setSelectedBrand(brand);

  };

  return (
    <div className='main-section'>
      <h1>
        Featuring the <span style={{ color: 'orange' }}>Best Brands</span>
      </h1>
      <p>Select your preferred brand and explore our exquisite collection</p>
      <div className='logos-container'>
        {data.findAllBrands.map((brand) => (
          <div key={brand.id} className='brand-logo' onClick={() => handleBrandClick(brand)}>
            <img src={brand.image} alt={`Brand ${brand.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
