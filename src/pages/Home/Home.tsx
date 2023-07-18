import { Box, Container, Section } from './Home.styled';

import BaldiesVideo from './components/BaldiesVideo';
import HomeDescription from './components/HomeDescription/HomeDescription';

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <HomeDescription />
        </Box>
        <Box>
          <BaldiesVideo />
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
