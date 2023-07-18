import styled from 'styled-components';

export const Section = styled.section(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.sizing.navHeight})`,
  position: 'relative',
  background: theme.palette.body,
}));

export const Container = styled.section(({ theme }) => ({
  minHeight: '80vh',
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  maxWidth: '1200px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column-reverse',
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

  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));
