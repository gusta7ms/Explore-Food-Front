import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";
export const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;

  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.DARK.Dark_600};

  padding: 24px 100px;

  .ButtonOpenMenu {
    display: none;
  }

  img {
    height: 28px;
  }

  .Search {
    width: 100%;
  }

  .buttonOrdersDesktop {
    padding: 0 16px;
    width: 10.625rem;
    font-size: 14px;
    white-space: nowrap;
  }

  .buttonOrdersMobile {
    display: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 24px 86px;

    img {
      height: 24px;
    }

    .buttonOrdersDesktop {
      width: 9.625rem;
      font-size: 12px;
      white-space: nowrap;
    }
  }

  @media (max-width: 916px) {
    padding: 24px 70px;

    img {
      height: 22px;
    }
  }

  @media (max-width: 866px) {
    padding: 24px 20px;

    .ButtonOpenMenu {
      display: flex;
    }

    .buttonOrdersDesktop {
      display: none;
    }

    img {
      height: 22px;
    }

    .buttonSingOut {
      display: none;
    }

    .Search {
      display: none;
    }

    .buttonOrdersDesktop {
      display: none;
    }
    .buttonOrdersMobile {
      display: flex;
    }
  }
`;

