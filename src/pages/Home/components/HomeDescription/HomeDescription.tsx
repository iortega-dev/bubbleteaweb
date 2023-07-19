import Typewriter from 'typewriter-effect';

import EtherTeaText from '../../../../assets/img/EtherTea.png';

import { StyledLogo, Subtitle, Title, TypewritterWrapper } from './HomeDescription.styled';
import HomeCarousel from '../HomeCarousel';

const HomeDescription = () => {
  return (
    <>
      <StyledLogo src={EtherTeaText} />
      <HomeCarousel />
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
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">Mango</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">Red Velvet</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-4">Black Sugar</span>')
                .pauseFor(1500)
                .deleteAll()
                .typeString('<span class="text-5">Matcha</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-6">Chocolate</span>')
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
