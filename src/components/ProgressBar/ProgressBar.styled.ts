import styled from 'styled-components';

export const ProgressBarContainer = styled.div({
  height: '10px',
  borderRadius: '10px',
  background: '#f3d3c5 ',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const ProgressFill = styled.div<{ progress: number }>(props => ({
  height: '100%',
  width: `${props.progress}%`,
  background: '#e1a58e',
  transition: 'width 0.3s ease-in-out',
}));
