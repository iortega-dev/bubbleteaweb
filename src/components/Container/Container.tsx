import React from 'react';
import { ContainerStyled } from './Container.styled';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
