import * as S from './styles';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      <S.SignOutIcon />
    </S.Button>
  );
};

export default FloatingButton;
