import * as S from './styles';

export interface MessageInputProps {
  inputValue: string;
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const MessageInput = ({
  inputValue,
  onInputChange,
  onFormSubmit,
}: MessageInputProps) => {
  return (
    <S.Container onSubmit={onFormSubmit}>
      <S.Input
        value={inputValue}
        onChange={onInputChange}
        placeholder="Type a new message here"
      />
    </S.Container>
  );
};

export default MessageInput;
