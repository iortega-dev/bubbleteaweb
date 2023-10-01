import React from 'react';
import { Backdrop, ModalWrapper } from './Modal.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>{children}</ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
