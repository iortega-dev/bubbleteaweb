import {
  Box,
  Container,
  ImageStyled,
  ImageWrapper,
  Section,
  Subtitle,
  Text,
  Title,
} from './OurStory.styled';

import BaldiesBrotherhoodPic from '../../assets/img/baldiesbrotherhood.png';

const OurStory = () => {
  return (
    <Section id="story">
      <Container>
        <Box>
          <ImageWrapper>
            <ImageStyled src={BaldiesBrotherhoodPic} alt="Baldies" loading="lazy" />
          </ImageWrapper>
        </Box>
        <Box>
          <Title>{'Behind the Beards:\nOur Story'}</Title>
          <Subtitle>
            "Welcome to Bearded Baldies, a unique collection of digitally hand-crafted NFT art
            pieces that celebrate the bold, the bald, and the bearded".
          </Subtitle>
          <Text>
            Each element carries different levels of rarity, making every Baldie special in its own
            way. As you explore the world of Bearded Baldies, you're not just purchasing an NFT -
            you're joining a vibrant, inclusive community.
          </Text>
        </Box>
      </Container>
    </Section>
  );
};

export default OurStory;
