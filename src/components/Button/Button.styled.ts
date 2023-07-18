import styled from 'styled-components';

export const ButtonStyled = styled.button(({ theme }) => ({
  padding: theme.spacing(1, 5),
  border: '2px solid #000',
  borderRadius: '45px',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  background: '#000',
  fontSize: theme.sizing.p,
  fontWeight: 600,
  color: '#FFF',
  boxShadow: '3px 3px 5px 2px rgba(0, 0, 0, .3)',
  '&:hover': {
    background: '#FFF',
    color: '#000',
    boxShadow: '3px 3px 5px 2px rgba(0, 0, 0, .1)',
    transform: 'translateY(-3px)',
  },
}));
