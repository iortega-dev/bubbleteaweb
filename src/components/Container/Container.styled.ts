import styled from 'styled-components';

export const ContainerStyled = styled.div<{ isSticky: boolean }>(({ theme, isSticky }) => ({
  '#header': {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1,

    boxShadow: isSticky ? '0px -8px 20px 0px rgba(0,0,0,0.75)' : 'unset',
    transition: 'box-shadow 0.3s ease-in-out',
  },

  '#content': {
    paddingTop: theme.sizing.navHeight,
  },
}));
