import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './theme/defaultTheme';
import { GlobalStyles } from './theme/global';

import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import FAQs from './pages/FAQs/FAQs';
import Background from './components/Background/Background';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>
        <Background />
        <Home />
        <FAQs />
        <BackToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
