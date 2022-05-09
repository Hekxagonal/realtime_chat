import * as S from './styles';

export interface InputProps {
  placeholder: string;
  type?: 'text' | 'password';
  onChange?: () => void;
  value?: string;
}

const Input = ({ placeholder, type, value, onChange }: InputProps) => {
  return (
    <S.Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
