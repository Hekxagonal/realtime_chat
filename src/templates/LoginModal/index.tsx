import Button from '../../components/Button';
import Input from '../../components/Input';
import * as S from './styles';
import Image from '../../assets/online_chat.svg';

export interface iComponent {
  children: string;
}

const LoginModal = () => {
  return (
    <S.Container>
      <S.Illustration src={Image} />
      <S.Modal>
        <S.Title>Hello</S.Title>
        <Input placeholder="Username" />
        <Input placeholder="Pass" />
        <Button>Login</Button>
      </S.Modal>
    </S.Container>
  );
};

export default LoginModal;
