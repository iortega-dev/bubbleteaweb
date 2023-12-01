import { ButtonStyled } from './Button.styled';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  size?: 'medium' | 'small' | 'icon';
}

const Button: React.FC<ButtonProps> = ({ children, size = 'medium', ...props }) => {
  return (
    <ButtonStyled size={size} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
