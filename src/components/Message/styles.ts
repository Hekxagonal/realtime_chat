import styled, { css } from 'styled-components';

interface StyledProps {
  isSender?: boolean;
  user?: string;
}

export const Container = styled.div`
  width: fit-content;
  max-width: 80%;
  min-width: 10%;
  border-radius: 10px 0px 10px 10px;
  margin: 10px 20px 0px 20px;
  background: #054640;
  color: white;
  padding: 5px;
  text-align: left;
  display: flex;
  font-weight: 400;
  align-self: flex-end;
  flex-flow: column wrap;
  justify-content: space-between;

  ::before {
    display: inline;
    position: absolute;
    content: '';
    background: transparent;
    width: 0px;
    height: 0px;
    border: 10px solid transparent;
    border-left: 10px solid #054640;
    border-top: 10px solid #054640;
    right: 0;
    margin: -7px 8px 0px 0px;
    transform: scaleY(0.8);
  }

  ${({ isSender }: StyledProps) =>
    !isSender &&
    css`
      background: #212e36;
      align-self: flex-start;
      text-align: left;
      border-radius: 0px 10px 10px 10px;

      ::before {
        border: 10px solid transparent;
        border-right: 10px solid #212e36;
        border-top: 10px solid #212e36;
        margin: -7px 0px 0px 10px;
        left: -2px;
      }
    `}
`;

export const Content = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const UserName = styled.div`
  color: #bfbfbf;
  margin-left: 10px;
  font-size: 15px;
  margin-top: 5px;
  margin-right: 10px;
  font-weight: bold;
`;

export const CreatedAt = styled.span`
  color: #bfbfbf;
  margin-left: 10px;
  font-size: 12px;
  align-self: flex-end;
  margin-top: 5px;
`;
