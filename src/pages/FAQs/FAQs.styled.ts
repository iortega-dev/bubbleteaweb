import styled from 'styled-components';

export const Section = styled.div({
  height: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Container = styled.section(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing(2, 6),
  maxWidth: '1200px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  background: theme.palette.body,

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },

  '.accordion': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 630,

    '.accordion__item': {
      '&:not(:last-child)': {
        borderBottomColor: theme.palette.black,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
      },
    },
  },
}));

export const Title = styled.h1(({ theme }) => ({
  fontSize: theme.sizing.h1,
  fontFamily: 'singkongregular',
  whiteSpace: 'pre-line',
  width: '100%',
  color: theme.palette.black,
  textAlign: 'center',

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.h2,
  },
}));

export const Subtitle = styled.h3(({ theme }) => ({
  fontSize: theme.sizing.h4,
  color: theme.palette.black,
  fontFamily: 'singkongregular',
  width: '100%',
  cursor: 'pointer',

  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
    textAlign: 'center',
  },
}));

export const Text = styled.p(({ theme }) => ({
  fontSize: theme.sizing.p,
  color: theme.palette.darkGray,
  fontWeight: 'bold',
  width: '100%',

  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
    textAlign: 'center',
  },
}));
