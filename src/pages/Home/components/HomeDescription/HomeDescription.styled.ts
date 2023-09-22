import styled from 'styled-components';

export const FirstTitleWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

export const SecondTitleWrapper = styled.div(({ theme }) => ({}));

export const Title = styled.h1(({ theme }) => ({
  fontFamily: 'singkongregular',
  fontSize: theme.sizing.h2,
  width: '100%',
  textAlign: 'center',
  whiteSpace: 'pre',
  margin: '0',

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.h3,
  },
}));

export const Subtitle = styled.h3(({ theme }) => ({
  fontSize: theme.sizing.p,
  color: theme.utils.rgba(theme.palette.black, 0.6),
  width: '100%',
  textAlign: 'center',

  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
  },
}));

export const ButtonWrapper = styled.div(({ theme }) => ({
  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    alignSelf: 'center',
  },
}));

export const TypewritterWrapper = styled.div({
  fontFamily: 'singkongregular',
  span: {
    fontFamily: 'singkongregular',

    '.text-1': {
      color: '#bc5a2f',
    },

    '.text-2': {
      color: '#ffa500',
    },

    '.text-3': {
      color: '#dc143c',
    },

    '.text-4': {
      color: '#141414',
    },

    '.text-5': {
      color: '#7bcc70',
    },

    '.text-6': {
      color: '#8b4513',
    },
  },
});

export const StyledLogo = styled.img(({ theme }) => ({
  width: '100%',
  maxWidth: '512px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: 480,
  },
}));

export const StyledTea = styled.img(({ theme }) => ({
  width: '100%',
  maxWidth: 328,
  transition: 'all .2s ease-in-out',
  cursor: 'pointer',
  [theme.breakpoints.down('lg')]: {
    maxWidth: 256,
  },

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));
