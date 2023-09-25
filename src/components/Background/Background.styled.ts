import styled, { keyframes, css } from 'styled-components';

// import Background from '../../assets/img/background.png';
import BackgroundClodus from '../../assets/img/cloud-tea-bg.png';

// export const BackgroundStyled = styled.div({
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center center',
//   backgroundSize: 'cover',
//   backgroundImage: `url(${Background})`,
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
// });

const cloudsAnimation = keyframes({
  from: {
    backgroundPosition: ' 0 0',
  },
  to: {
    backgroundPosition: ' 100% 0',
  },
});

export const BackgroundColorStyled = styled.div({
  position: 'fixed',
  height: '100vh',
  width: '100%',
  background: `linear-gradient(to bottom, #e1a58e 50%, #f3d3c5  50%)`,
});

export const BackgroundStyled = styled.div(
  {
    height: '236px',
    width: '100%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: `url(${BackgroundClodus})`,
    backgroundRepeat: 'repeat-x',
  },
  css`
    animation: ${cloudsAnimation} 10s linear infinite;
  `
);
