import styled from 'styled-components';

export const VideoContainer = styled.div(({ theme }) => ({
  width: '100%',
  maxWidth: '512px',

  video: {
    width: '100%',
    height: 'auto',
  },

  [theme.breakpoints.down('lg')]: {
    width: '50%',
  },
}));
