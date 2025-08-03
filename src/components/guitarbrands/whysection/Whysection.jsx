import React from 'react';
import './Whysection.scss';
import StartBrowsing from '../../../assets/StartBrowsing.png';
import EasyDelivery from '../../../assets/EasyDelivery.png';
import EmptyWallet from '../../../assets/EmptyWallet.png';

export const Whysection = () => {
  const icons = [
    {
      image: StartBrowsing,
      h3: 'SMOOTH BROWSING',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: EasyDelivery,
      h3: 'EASY DELIVERY',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: EmptyWallet,
      h3: 'SWIFT PAYMENTS',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <div className="why-section">
      <h1>Why try<span style={{ color: 'darkorange' }}> Vibestings?</span></h1>

      <div className="icons-container">
        {icons.map((item, index) => (
          <div className="icon-card" key={index}>
            <div className='icons-background'>
            <img src={item.image} alt={item.h3} />
            </div>
            <h3>{item.h3}</h3>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
