import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  position: fixed;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
  }
`;

export const Modal = styled.div`
  height: fit-content;
  padding: 10px 50px;
  margin: 0px 0px;
  display: flex;
  flex-flow: column nowrap;
  border: 5px solid green;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const Title = styled.h1``;

export const Illustration = styled.img`
  display: none;
`;
