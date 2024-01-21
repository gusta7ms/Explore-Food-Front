import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  span {
    width: 100%;
    margin: 2rem 0 8px 0;
    color: ${({ theme }) => theme.LIGHT.Light_400};

    @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
      font-size: .8rem;

    }
  }

  input {
    width: 100%;
    padding: 0.75rem 0.875rem;

    background-color: ${({ theme }) => theme.DARK.Dark_800};
    color: ${({ theme }) => theme.LIGHT.Light_100};

    border: none;
    border-radius: 8px;

    @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
      font-size: .8rem;

    }
  }
`;
