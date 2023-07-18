import styled from 'styled-components';

export const Section = styled.section({
  minHeight: '100vh',
  position: 'relative',
  background: '#111',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Container = styled.section(({ theme }) => ({
  minHeight: '80vh',
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  maxWidth: '1200px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const Box = styled.section(({ theme }) => ({
  width: '45%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const ImageStyled = styled.img({
  width: '100%',
});

export const ImageWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#353535',
  transform: 'rotate(5deg)',
  boxShadow: '14px 10px 16px 0px rgba(0,0,0,0.75)',

  [theme.breakpoints.down('md')]: {
    width: '75%',
    marginBottom: theme.spacing(4),
  },
}));

export const Title = styled.h1(({ theme }) => ({
  fontSize: theme.sizing.h2,
  alignSelf: 'flex-start',
  whiteSpace: 'pre-line',
  width: '100%',
  color: theme.palette.white,

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.h3,
    textAlign: 'center',
  },
}));

export const Subtitle = styled.h3(({ theme }) => ({
  fontSize: theme.sizing.h4,
  color: theme.palette.white,
  width: '100%',

  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
    textAlign: 'center',
  },
}));

export const Text = styled.p(({ theme }) => ({
  fontSize: theme.sizing.p,
  color: theme.utils.rgba(theme.palette.white, 0.6),
  width: '100%',

  alignSelf: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
    textAlign: 'center',
  },
}));
