import styled from 'styled-components';

export const CardContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: '0.3s ease-in-out',
  textAlign: 'center',
  margin: '10px',
  width: '300px',

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

export const MemberImage = styled.img({
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '50%',
});

export const MemberContent = styled.div({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

export const MemberName = styled.h3(({ theme }) => ({
  fontSize: theme.sizing.h4,
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
}));

export const MemberDescription = styled.p(({ theme }) => ({
  fontSize: theme.sizing.p,
  color: '#777',
}));

export const SocialWrapper = styled.div({});

export const ImageStyled = styled.img({
  width: 32,
});
