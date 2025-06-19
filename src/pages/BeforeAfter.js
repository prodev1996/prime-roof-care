import React from 'react';
import './BeforeAfter.css';
import CompareImage from 'react-compare-image';

import img1 from '../assets/before and after/img1.jpg';
import img2 from '../assets/before and after/img2.jpg';
import img3 from '../assets/before and after/img3.jpg';
import img4 from '../assets/before and after/img4.jpg';

const BeforeAfter = () => {
  return (
    <div className="before-after-page">
      <h2>Before & After Gallery</h2>
      <p>Compare our transformation work below.</p>
      <div className="before-after-gallery">
        <div className="compare-box">
          <CompareImage leftImage={img1} rightImage={img2} />
        </div>
        <div className="compare-box">
          <CompareImage leftImage={img3} rightImage={img4} />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
