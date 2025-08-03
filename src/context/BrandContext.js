import { createContext, useContext, useState } from 'react';

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <BrandContext.Provider value={{ selectedBrand, setSelectedBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => useContext(BrandContext);
