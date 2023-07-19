import styled from 'styled-components';

import Background from '../../assets/img/background.png';

export const BackgroundStyled = styled.div({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
