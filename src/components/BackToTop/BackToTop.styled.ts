import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(5px);
  }

  50% {
    transform: translateY(-10px);
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.black};
  color: #fff;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s ease;
  font-size: 24px;

  &:hover {
    background-color: #333;

    div {
      animation: ${bounce} 1s ease-in-out infinite;
    }
  }
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 8px solid ${({ theme }) => theme.palette.white};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid ${({ theme }) => theme.palette.white};
    transform: rotate(120deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid ${({ theme }) => theme.palette.white};
    transform: rotate(-120deg);
  }
`;
