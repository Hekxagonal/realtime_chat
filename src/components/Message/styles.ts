import styled, { css } from 'styled-components';
import { MessageProps } from './';

export const Container = styled.div`
  width: fit-content;
  max-width: 40%;
  min-width: 10%;
  border-radius: 10px;
  margin-top: 20px;
  background: #45a379;
  border: 2px solid #15e889;
  color: white;
  padding: 10px;
  text-align: center;

  ${({ isSender }: MessageProps) =>
    !isSender &&
    css`
      background: #a3454c;
      border: 2px solid #e81538;
      align-self: flex-end;
    `}
`;
