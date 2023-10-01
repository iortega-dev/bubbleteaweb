import { createContext, useContext, ReactNode, useState } from 'react';

interface ModalContextProps {
  isVisible: boolean;
  toggleModalVisibility: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleModalVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ModalContext.Provider value={{ isVisible, toggleModalVisibility }}>
      {children}
    </ModalContext.Provider>
  );
};
