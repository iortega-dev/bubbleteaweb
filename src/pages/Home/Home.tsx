import { Box, Container, Section } from './Home.styled';

import HomeDescription from './components/HomeDescription/HomeDescription';

const Home = () => {
  return (
    <Section>
      <Container>
        <Box>
          <HomeDescription />
        </Box>
      </Container>
    </Section>
  );
};

export default Home;
