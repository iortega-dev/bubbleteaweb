import styled from 'styled-components';

export const Section = styled.div({
  height: '100vh',
  position: 'relative',
});

export const Container = styled.section(({ theme }) => ({
  minHeight: '100vh',
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  maxWidth: '960px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column-reverse',
    padding: theme.spacing(0, 6),
  },
}));

export const Box = styled.section(({ theme }) => ({
  width: '60%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',

  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));
