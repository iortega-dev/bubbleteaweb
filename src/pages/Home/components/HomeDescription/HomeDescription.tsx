import Typewriter from 'typewriter-effect';

// import Button from '../../../../components/Button/Button';
// import { ButtonWrapper } from './HomeDescription.styled';

import { Subtitle, Title, TypewritterWrapper } from './HomeDescription.styled';

const HomeDescription = () => {
  return (
    <>
      <Title>
        {'Join The \n Bearded Baldies'}
        <TypewritterWrapper>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={typewritter => {
              typewritter
                .typeString('<span class="text-1">Brotherhood.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">Fraternity.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">Unity.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-1">Alliance.</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-1">Kinship.</span>')
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </TypewritterWrapper>
      </Title>
      <Subtitle>Dive into the Beardverse!</Subtitle>

      {/* <ButtonWrapper>
        <Button>Explore</Button>
      </ButtonWrapper> */}
    </>
  );
};

export default HomeDescription;
