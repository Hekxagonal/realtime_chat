import * as S from './styles';

export interface MessageProps {
  children: string;
  isSender: boolean;
}

const Message = ({ children, isSender }: MessageProps) => {
  return <S.Container isSender={isSender}>{children}</S.Container>;
};

export default Message;
