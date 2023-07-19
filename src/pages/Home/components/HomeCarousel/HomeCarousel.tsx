import React, { useState, useEffect } from 'react';
import { CarouselContainer, Image } from './HomeCarousel.styled';

import BlackSugarTea from '../../../../assets/img/teas/black_sugar.png';
import CaramelTea from '../../../../assets/img/teas/caramel.png';
import MangoTea from '../../../../assets/img/teas/mango.png';
import MatchaTea from '../../../../assets/img/teas/matcha.png';
import RedVelvet from '../../../../assets/img/teas/strawberry.png';
import VanillaTea from '../../../../assets/img/teas/vanilla.png';

const imageList = [CaramelTea, MangoTea, RedVelvet, BlackSugarTea, MatchaTea, VanillaTea];

const HomeCarousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageList.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {imageList.map((image, index) => (
        <Image key={index} src={image} visible={index === currentImage} />
      ))}
    </CarouselContainer>
  );
};

export default HomeCarousel;
