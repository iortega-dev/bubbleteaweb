import styled from 'styled-components';

export const FirstTitleWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));

export const SecondTitleWrapper = styled.div({});

export const ThirdTitleWrapper = styled.div({});

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

  '> span': {
    fontFamily: 'singkongregular',
    color: '#308914',
  },
}));

export const AlreadyMintedText = styled.h3(({ theme }) => ({
  fontFamily: 'mouldycheese',
  fontSize: '2.5em',
  width: '100%',
  textAlign: 'center',
  whiteSpace: 'pre',
  margin: '0',
  marginTop: 20,

  [theme.breakpoints.down('lg')]: {
    fontSize: '1.5em',
  },
}));

export const Subtitle = styled.h3(({ theme }) => ({
  fontFamily: 'mouldycheese',
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
  marginTop: '20px',
  display: 'flex',
  alignSelf: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    marginTop: '20px',
    alignSelf: 'center',
  },
}));

export const MintButton = styled.button({
  display: 'inline-block',
  padding: '4px 64px 2px',
  lineHeight: '42px',
  fontFamily: 'singkongregular',
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'rgb(53, 53, 53)',
  background: 'transparent',
  borderRadius: '50px',
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  border: '6px solid black',

  ':before': {
    content: '""',
    position: 'absolute',
    top: '0%',
    left: '-100%',
    width: '100%',
    height: '100%',
    backgroundColor: '#e1a58e',
    transition: 'left 0.8s ease-in-out',
    zIndex: -1,
  },

  ':hover:before': {
    left: '0%',
  },

  ':after': {
    content: '""',
    position: 'absolute',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    transition: 'background-color 0.8s ease-in-out',
    zIndex: -1,
  },

  ':hover:after': {
    backgroundColor: 'transparent',
  },
});

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

export const StyledLink = styled.a(({ theme }) => ({
  fontFamily: 'gloriahallelujah',
  fontWeight: 'bold',
  position: 'absolute',
  whiteSpace: 'nowrap',
  bottom: -24,
  right: -64,
  fontSize: 24,
  textDecoration: 'none',
  zIndex: 1,

  [theme.breakpoints.down('lg')]: {
    position: 'relative',
    right: 0,
    bottom: -10,
    fontSize: 20,
  },
}));

export const StyledLogoWrapper = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    marginBottom: 10,
  },
}));
