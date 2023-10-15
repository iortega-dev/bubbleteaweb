import React from 'react';
import { Backdrop, ModalWrapper } from './Modal.styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeOnBackdropClick = true,
}) => {
  if (!isOpen) return null;

  const backdropClick = () => {
    if (closeOnBackdropClick) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={backdropClick}>
      <ModalWrapper onClick={e => e.stopPropagation()}>{children}</ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
