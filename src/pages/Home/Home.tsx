import { ModalProvider } from '../../context/ModalContext';
import { Box, Container, Section } from './Home.styled';

import HomeDescription from './components/HomeDescription/HomeDescription';

const Home = () => {
  return (
    <ModalProvider>
      <Section>
        <Container>
          <Box>
            <HomeDescription />
          </Box>
        </Container>
      </Section>
    </ModalProvider>
  );
};

export default Home;
