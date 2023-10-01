import styled from 'styled-components';

export const ButtonStyled = styled.button<{ size: 'medium' | 'small' }>(({ theme, size }) => ({
  display: 'inline-block',
  padding: size === 'medium' ? '16px 64px' : '8px 32px',
  lineHeight: 'normal',
  fontFamily: 'singkongregular',
  fontSize: size === 'medium' ? '36px' : '18px',
  fontWeight: size === 'medium' ? 'bold' : 'bold',
  color: 'rgb(53, 53, 53)',
  background: 'transparent',
  borderRadius: '50px',
  textAlign: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  border: size === 'medium' ? '6px solid black' : '4px solid black',
  outline: 'none !important',

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
}));
