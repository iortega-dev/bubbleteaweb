import styled from 'styled-components';

export const Backdrop = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ModalWrapper = styled.div({
  background: 'white',
  // borderRadius: '10px',
  // boxShadow: '0 5px 16px rgba(0, 0, 0, 0.2)',
  zIndex: 101,
  width: '80%',
  maxWidth: '500px',
  padding: '20px',
  boxSizing: 'border-box',
  borderRadius: '16px',
  boxShadow: '10px 10px 0px 0px rgba(250, 181, 100, 0.4)',
});
