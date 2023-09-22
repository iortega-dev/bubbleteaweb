import { CarouselContainer, Image } from './HomeCarousel.styled';

import BlackSugarTea from '../../../../assets/img/teas/black_sugar.png';
import CaramelTea from '../../../../assets/img/teas/caramel.png';
import MangoTea from '../../../../assets/img/teas/mango.png';
import MatchaTea from '../../../../assets/img/teas/matcha.png';
import RedVelvet from '../../../../assets/img/teas/strawberry.png';
import VanillaTea from '../../../../assets/img/teas/vanilla.png';

const imageList = [CaramelTea, MangoTea, RedVelvet, BlackSugarTea, MatchaTea, VanillaTea];

const HomeCarousel = ({ imageIndex }: { imageIndex: number }) => {
  return (
    <CarouselContainer>
      {imageList.map((image, index) => (
        <Image key={index} src={image} visible={index === imageIndex} />
      ))}
    </CarouselContainer>
  );
};

export default HomeCarousel;
