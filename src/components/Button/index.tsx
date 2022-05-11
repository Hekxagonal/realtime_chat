import * as S from './styles';

export interface iComponent {
  children: string;
  onClick?: (event: any) => void;
}

const Button = ({ children, onClick }: iComponent) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
