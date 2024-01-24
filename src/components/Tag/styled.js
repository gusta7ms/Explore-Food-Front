import styled from "styled-components";

export const Container = styled.div`
  span {
    font-size:.875rem ;
  font-weight: 500;

  border-radius: 8px;
  margin:6px 0;

  padding: 8px 4px;
  color: ${({ theme }) => theme.LIGHT.Light_100};
  background-color: ${({ theme }) => theme.DARK.Dark_1000};
  }
`;
