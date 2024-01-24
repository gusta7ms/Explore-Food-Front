import styled from "styled-components";

export const Container = styled.button`
height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 0;
  background-color: ${({ theme }) => theme.TINTS.Tomato_100};
  color: ${({ theme }) => theme.LIGHT.Light_100};

  font-size: 0.875rem;
  font-weight: 500;

  width: 100%;
  border: none;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 4px;
    height: 24px;
    width: 24px;
  }
`;
