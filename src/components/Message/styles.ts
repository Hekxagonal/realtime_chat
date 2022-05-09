import styled from 'styled-components';
import { MessageProps } from './';

export const Container = styled.div`
  background: ${({ isSender }: MessageProps) => (isSender ? 'green' : 'red')};
  color: white;
  padding: 10px;
`;
