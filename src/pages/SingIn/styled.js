import { styled } from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 90px 110px;

  color: ${({ theme }) => theme.LIGHT.Light_100};

  img {
    margin-right: 24px;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 40px 50px;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    height: auto;
    flex-direction: column;
    justify-content: center;

    img {
      height: 44px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    img {
      height: 36px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    img {
      height: 30px;
    }
  }
`;

export const From = styled.form`
  width: 28rem;
  padding: 4rem;

  background-color: ${({ theme }) => theme.DARK.Dark_700};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    display: flex;
    justify-content: center;
    font-size: 2rem;

    width: 100%;
  }

  button {
    margin-top: 2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 80%;
    padding: 0;
    background-color: transparent;

    > span {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    width: 100%;
    padding: 0;
    background-color: transparent;

    > span {
      display: none;
    }
  }
`;
