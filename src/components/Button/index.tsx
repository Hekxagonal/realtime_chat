import * as S from './styles';

export interface iComponent {
  children: string;
  onClick?: (event: MouseEvent) => void;
}

const Button = ({ children }: iComponent) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
