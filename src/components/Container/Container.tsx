import React, { useEffect, useState } from 'react';
import { ContainerStyled } from './Container.styled';

const Container = ({ children }: { children: React.ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false);

  const toggleSticky = () => {
    if (window.scrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleSticky);
    return () => window.removeEventListener('scroll', toggleSticky);
  }, []);

  return <ContainerStyled isSticky={isSticky}>{children}</ContainerStyled>;
};

export default Container;
