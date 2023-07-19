import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px; // Agrega una altura fija para el contenedor
  overflow: hidden;
`;

export const Image = styled.div<{ src: string; visible: boolean }>`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;
