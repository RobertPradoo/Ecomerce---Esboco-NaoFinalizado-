import React, { useState } from 'react';
import './BannerPrincipal.scss';

function BannerPrincipal() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'url_da_imagem',
    'url_da_imagem',
    'url_da_imagem'
  ];
  return (
    <div className="Banner-principal">
      <div className="banner-images" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? 'active' : ''}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default BannerPrincipal;