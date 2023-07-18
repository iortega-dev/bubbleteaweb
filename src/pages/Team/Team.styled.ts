import styled from 'styled-components';

export const Section = styled.section({
  minHeight: '100vh',
  position: 'relative',
  background: '#111',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Container = styled.section(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  maxWidth: '1200px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    paddingTop: theme.sizing.navHeight,
  },
}));

export const Title = styled.h1(({ theme }) => ({
  fontSize: theme.sizing.h1,
  whiteSpace: 'pre-line',
  width: '100%',
  color: theme.palette.white,
  textAlign: 'center',

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.h2,
  },
}));

export const Subtitle = styled.h3(({ theme }) => ({
  fontSize: theme.sizing.h4,
  color: theme.palette.black,
  width: '100%',
  textAlign: 'center',

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
  },
}));

export const TeamMemberCardsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  marginBottom: theme.spacing(4),

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
}));
