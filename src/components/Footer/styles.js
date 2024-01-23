import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.DARK.Dark_600};

  padding: 1.5rem 6.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.LIGHT.Light_200};
  font-size: 14px;
  white-space: nowrap;

  img {
    height: 1.5rem;
    filter: contrast(0);
    opacity: 0.5;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 1.5rem 5.375rem;

    img {
      height: 1.375rem;
    }
  }

  @media (max-width: 916px) {
    padding: 1.5rem 4.375rem;
    font-size: 0.75rem;

    img {
      height: 1.25rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    font-size: 0.625rem;
  }

  @media (max-width: 866px) {
    padding: 1.5rem 1.25rem;
    font-size: 0.5rem;

    img {
      height: 1.125rem;
    }

    span {
      margin-left: 10px;
    }
  }
`;
