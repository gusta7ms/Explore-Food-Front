import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  width: 304px;

  padding: 0 1.4rem;

  display: flex;
  flex-direction: column;

  text-align: center;

  color: ${({ theme }) => theme.LIGHT.Light_100};

  border-radius: 8px;

  background-color: ${({ theme }) => theme.DARK.Dark_200};

  .favButton {
    position: absolute;
    top: 0;
    right: 0;
    margin: 16px 16px;

    svg {
      height: 24px;
      width: 24px;
    }
  }

  img {
    margin-top: 24px;
    height: 11rem;
    width: 100%;
    object-fit: contain;
    border-radius: 50%;
  }

  .nameDish {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: 700;
    width: 100%;
    padding: 15px 0;

    svg {
      margin-left: 5px;
    }
  }

  p {
    color: ${({ theme }) => theme.LIGHT.Light_400};
    font-size: 0.875rem;

    width: 100%;

    text-align: center;
  }

  h4 {
    font-size: 2rem;
    color: ${({ theme }) => theme.TINTS.Cake_100};
    font-weight: 400;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px 0;
  }

  .controlsDishes {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0 0 15px 0;
  }

  .numberDishes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }

  .addDishes {
    width: 96px;
  }
  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 268px;

    img {
      height: 9.625rem;
    }

    p {
      font-size: 0.75rem;
    }

    h4 {
      padding-top: 0;
      font-size: 1.75rem;
    }

    .controlsDishes {
      flex-direction: column;
      gap: 15px;
    }

    .addDishes {
      width: 100%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 271.6px;

    img {
      height: 8.25rem;
    }

    p {
      display: none;
    }

    h4 {
      padding-top: 0;
      font-size: 1.5rem;
    }

    .controlsDishes {
      flex-direction: column;
      gap: 15px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    width: 260.8px;

    img {
      height: 6.875rem;
    }

    h4 {
      padding-top: 0;
      font-size: 1.25rem;
    }

    .controlsDishes {
      flex-direction: column;
      gap: 15px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    width: 250px;

    img {
      height: 5.5rem;
    }

    h4 {
      padding-top: 0;
      font-size: 1rem;
    }

    .controlsDishes {
      flex-direction: column;
      gap: 15px;
    }
  }
`;
