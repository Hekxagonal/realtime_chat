import styled from 'styled-components';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export const Button = styled.button`
  position: fixed;
  top: 0;
  left: 50%;
  margin-top: 20px;
  padding: 12px 13px 10px 13px;
  background: #5f1417;
  color: #cbd2cd;
  font-size: 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: background ease-in-out 0.5s;

  :hover {
    background: #b92b2a;
    color: white;
  }
`;

export const SignOutIcon = styled(RiLogoutCircleRLine)``;
