import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyles } from './theme/global';

import Container from './components/Container/';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Baldies from './pages/Baldies';
import Team from './pages/Team';
import FAQs from './pages/FAQs/FAQs';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Header />
          <div id="content">
            <Home />
            <OurStory />
            <Baldies />
            <Team />
            <FAQs />
            <Footer />
          </div>
          <BackToTop />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
