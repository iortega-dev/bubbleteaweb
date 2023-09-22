import { useState } from 'react';
import Typewriter from 'typewriter-effect';

import EtherTeaText from '../../../../assets/img/EtherTea.png';

import { StyledLogo, Subtitle, Title, TypewritterWrapper } from './HomeDescription.styled';
import HomeCarousel from '../HomeCarousel';

const HomeDescription = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <StyledLogo src={EtherTeaText} />
      <HomeCarousel imageIndex={currentImage} />
      <Title>
        {'Do you want a free'}
        <TypewritterWrapper>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={typewritter => {
              typewritter
                .typeString('<span class="text-1">Caramel</span>')
                .callFunction(() => setCurrentImage(0))
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">Mango</span>')
                .callFunction(() => setCurrentImage(1))
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">Red Velvet</span>')
                .callFunction(() => setCurrentImage(2))
                .pauseFor(1500)
                .deleteAll()
                .typeString('<span class="text-4">Black Sugar</span>')
                .callFunction(() => setCurrentImage(3))
                .pauseFor(1500)
                .deleteAll()
                .typeString('<span class="text-5">Matcha</span>')
                .callFunction(() => setCurrentImage(4))
                .pauseFor(1500)
                .deleteAll()
                .typeString('<span class="text-6">Chocolate</span>')
                .callFunction(() => setCurrentImage(5))
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
          {'Bubble Tea?*'}
        </TypewritterWrapper>
      </Title>
      <Subtitle>* It's an NFT, not a real one ;)</Subtitle>

      {/* <ButtonWrapper>
        <Button>Explore</Button>
      </ButtonWrapper> */}
    </>
  );
};

export default HomeDescription;
