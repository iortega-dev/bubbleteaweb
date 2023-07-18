import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section(({ theme }) => ({
  position: 'relative',
  background: theme.palette.body,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Container = styled.section(({ theme }) => ({
  margin: '0 auto',
  padding: theme.spacing(0, 3),
  width: '100%',
  maxWidth: '1200px',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export const Subtitle = styled.p(({ theme }) => ({
  color: theme.palette.black,
  textAlign: 'center',

  [theme.breakpoints.down('lg')]: {
    fontSize: theme.sizing.p,
  },
}));

export const LogoWrapper = styled(Link)({
  transition: 'all 0.2s ease',

  '&:hover:': {
    transform: 'scale(1.1)',
  },
});

export const Logo = styled.img({
  width: 64,
  height: 'auto',
});
