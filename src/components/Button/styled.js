import styled from "styled-components";

export const Container = styled.button`
  padding: 12px 0;
  background-color: ${({theme}) => theme.TINTS.Tomato_100};
  color: ${({theme}) => theme.LIGHT.Light_100};

  font-size: .875rem;
  font-weight: 500;

  width:100%;
  border: none;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`