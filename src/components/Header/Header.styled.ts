import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section(({ theme }) => ({
  background: theme.palette.body,
}));

export const Navbar = styled.nav(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  maxWidth: '1200px',
  height: theme.sizing.navHeight,
  margin: '0 auto',
  padding: theme.spacing(0, 3),
}));

export const Menu = styled.ul<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  padding: 0,
  margin: 0,

  [theme.breakpoints.down('lg')]: {
    position: 'fixed',
    top: theme.sizing.navHeight,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    height: `calc(100vh - ${theme.sizing.navHeight})`,
    zIndex: 50,
    background: theme.utils.rgba(theme.palette.body, 0.85),
    backdropFilter: 'blur(2px)',

    transform: isOpen ? 'translateX(0%)' : 'translateX(-1000%)',
    transition: 'all 0.3s ease',

    flexDirection: 'column',
    justifyContent: 'center',
    touchAction: 'none',
  },
}));

export const MenuItem = styled.li(({ theme }) => ({
  margin: theme.spacing(0, 2),
  color: theme.palette.black,
  cursor: 'pointer',
  fontWeight: 600,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -6, // Ajusta aquí el espacio entre la línea y el texto
    width: '100%',
    height: 2,
    background: theme.palette.black,
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },

  '&:hover::before': {
    transform: 'scaleX(1)',
  },

  [theme.breakpoints.down('lg')]: {
    margin: theme.spacing(2, 0),

    '&::before': {
      display: 'none',
    },
  },
}));

export const HamburguerMenu = styled.span<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  width: '2rem',
  height: '2px',
  background: theme.palette.black,
  position: 'absolute',
  left: '50%',

  transform: isOpen ? 'translateX(-50%) rotate(45deg)' : 'translateX(-50%) rotate(0)',

  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',

  cursor: 'pointer',
  transition: 'all 0.3s ease',

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },

  '&::after, &::before': {
    content: '" "',
    width: '2rem',
    height: '2px',
    background: theme.palette.black,
    position: 'absolute',
    transition: 'all 0.3s ease',
  },

  '&::after': {
    top: isOpen ? '0' : '-0.7rem',
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
  },
  '&::before': {
    top: isOpen ? '0' : '0.7rem',
    transform: isOpen ? 'rotate(-90deg)' : 'rotate(0)',
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

export const WalletButton = styled.button(({ theme }) => ({
  padding: theme.spacing(1.25, 4),
  border: '3px solid #000',
  borderRadius: '45px',
  transition: 'ease-in-out 0.3s',
  cursor: 'pointer',
  background: '#000',
  fontSize: '1em',
  fontWeight: 600,
  color: 'white',
  '&:hover': {
    background: theme.palette.white,
    color: theme.palette.black,
    transform: 'scale(1.2) rotate(5deg)',
  },
}));

export const WalletButtonMobileWrapper = styled.div(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',

    a: {
      alignSelf: 'center',
      margin: theme.spacing(4, 0),
      img: {
        width: 32,
        height: 32,
      },
    },
  },
}));

export const WalletButtonDesktopWrapper = styled.div(({ theme }) => ({
  display: 'flex',

  a: {
    alignSelf: 'center',
    marginRight: theme.spacing(4),
    img: {
      width: 32,
      height: 32,
    },
  },

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const ImageStyled = styled.img({
  width: 32,
});
