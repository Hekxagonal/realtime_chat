import * as S from './styles';

export interface MessageProps {
  children: string;
  isSender: boolean;
  user?: string;
}

const Message = ({ children, isSender, user }: MessageProps) => {
  return (
    <S.Container isSender={isSender}>
      {children}
      <S.UserName>{user}</S.UserName>
    </S.Container>
  );
};

export default Message;
