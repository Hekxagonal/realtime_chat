import styled, { css } from 'styled-components';

interface StyledProps {
  isSender?: boolean;
  user?: string;
}

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
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${({ isSender }: StyledProps) =>
    !isSender &&
    css`
      background: #a3454c;
      border: 2px solid #e81538;
      align-self: flex-end;
    `}


    ::after {
        display: block;
        position: absolute;
        content: "";
        background-color: black;
        width: 10px
        height: 10px;
    }
`;

export const UserName = styled.span`
  color: #bfbfbf;
  margin-left: 10px;
  font-size: 12px;
  align-self: flex-end;
  margin-top: 5px;
`;
