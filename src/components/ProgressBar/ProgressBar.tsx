import React from 'react';
import { ProgressBarContainer, ProgressFill } from './ProgressBar.styled';

interface ProgressBarProps {
  progress: number; // Porcentaje entre 0 y 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressFill progress={progress} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
