import * as S from './styles';

export interface MessageProps {
  children: string;
  isSender: boolean;
  user?: string;
  createdAt: Date;
}

const Message = ({ children, isSender, user, createdAt }: MessageProps) => {
  return (
    <S.Container isSender={isSender}>
      <S.UserName>{user}</S.UserName>
      <S.Content>{children}</S.Content>
      <S.CreatedAt>{new Date(createdAt).toLocaleTimeString()}</S.CreatedAt>
    </S.Container>
  );
};

export default Message;
