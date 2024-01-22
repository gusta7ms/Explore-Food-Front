import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.DARK.Dark_900};
  color: ${({ theme }) => theme.LIGHT.Light_100};

  border-radius: 8px;

  span {
    width: 100%;
    margin: 2rem 0 8px 0;
    color: ${({ theme }) => theme.LIGHT.Light_400};

    @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
      font-size: 0.8rem;
    }
  }

  > input {
    width: 100%;
    padding: 0.75rem 0.875rem;
    height: 48px;

    background-color: ${({ theme }) => theme.DARK.Dark_900};
    color: ${({ theme }) => theme.LIGHT.Light_100};

    border: none;
    border-radius: 8px;

    &:placeholder {
      color: ${({ theme }) => theme.LIGHT.Light_500};
    }

    @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
      font-size: 0.8rem;
    }
  }
  > svg {
    height: 24px;
    width: 24px;
    margin-left: 14px;
    color: ${({ theme }) => theme.LIGHT.Light_500};
  }
`;
