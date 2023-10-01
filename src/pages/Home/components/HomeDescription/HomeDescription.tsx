import { useState } from 'react';
import Typewriter from 'typewriter-effect';

import EtherTeaText from '../../../../assets/img/EtherTea.png';

import {
  ButtonWrapper,
  FirstTitleWrapper,
  MintButton,
  SecondTitleWrapper,
  StyledLogo,
  Subtitle,
  Title,
  TypewritterWrapper,
} from './HomeDescription.styled';
import HomeCarousel from '../HomeCarousel';
import Modal from '../../../../components/Modal/Modal';
import HomeMintModal from '../HomeMintModal';
import { useModal } from '../../../../context/ModalContext';

const HomeDescription = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { isVisible, toggleModalVisibility } = useModal();

  return (
    <>
      <StyledLogo src={EtherTeaText} />
      <HomeCarousel imageIndex={currentImage} />
      <FirstTitleWrapper>
        <Title>Do you want a free </Title>
        <Title>
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
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-2">Mango</span>')
                  .callFunction(() => setCurrentImage(1))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-3">Red Velvet</span>')
                  .callFunction(() => setCurrentImage(2))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-4">Black Sugar</span>')
                  .callFunction(() => setCurrentImage(3))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-5">Matcha</span>')
                  .callFunction(() => setCurrentImage(4))
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('<span class="text-6">Chocolate</span>')
                  .callFunction(() => setCurrentImage(5))
                  .pauseFor(3000)
                  .deleteAll()
                  .start();
              }}
            />
          </TypewritterWrapper>
        </Title>
      </FirstTitleWrapper>
      <SecondTitleWrapper>
        <Title>Bubble Tea?*</Title>
        <Subtitle>* It's an NFT, not a real one ;)</Subtitle>
      </SecondTitleWrapper>

      <ButtonWrapper onClick={toggleModalVisibility}>
        <MintButton>MINT</MintButton>
      </ButtonWrapper>

      <Modal isOpen={isVisible} onClose={toggleModalVisibility}>
        <HomeMintModal />
      </Modal>
    </>
  );
};

export default HomeDescription;
