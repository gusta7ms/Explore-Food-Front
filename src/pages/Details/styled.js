import styled from "styled-components";
// import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100%;

  grid-template-columns: 1;
  grid-template-rows: 104px auto 78px;
  grid-area: "header" "content" "footer";

  background-color: ${({ theme }) => theme.DARK.Dark_400};
`;
export const Content = styled.main`
  /* margin-top: 5rem; */
  padding: 3rem 10rem;
  grid-area: content;
  min-height: calc(100vh - 5rem);
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 5rem;
    justify-content: flex-start;
    max-width: 6.625rem;

    display: flex;
    align-items: center;

    font-size: 24px;
    font-weight: 700;

    svg {
      width: 2.125rem;
      height: 2.125rem;
    }
  }
  .container {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem;
    gap: 3rem;
  }

  .hamburger-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 32px;
    width: 100%;
  }

  img {
    height: 24.375rem;
    width: 24.375rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .details {
    display: flex;
    flex-direction: column;
    max-width: 68.7rem;
  }

  h2 {
    font-size: 2rem;
    color: #e1e1e6;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    padding-top: 2.4rem;
    color: #e1e1e6;
    font-weight: 300;
  }

  ul {
    margin-top: 2.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.125rem;

    > span {
      font-size: 1rem;
    }
  }

  .controlsDishes {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2.75rem;

    > button {
      max-width: 10.125rem;
    }
  }

  .numberDishes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    span {
      font-size: 1.5rem;
      color: #fff;
      font-weight: 300;
      text-align: center;
    }
  }

  .addDishes {
    margin-left: 2.125rem;
  }


  @media (max-width: 1024px) {
    padding: 3rem 6rem;

    img {
      height: 20rem;
      width: 20rem;
    }
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 4rem;
    text-align: center;

    .container {
      flex-direction: column;
    }

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.2rem;
    }

    .hamburger-details {
      flex-direction: column;
      align-items: center;
    }

    .details {
      align-items: center;
    }
    .controlsDishes {
      justify-content: center;
    }
  }

  @media (max-width: 425px) {
    padding: 3rem 1.5rem;

    img {
      height: 14rem;
      width: 14rem;
    }

    h2 {
      text-align: center;
      font-size: 1.6rem;
    }

    p {
      text-align: center;
    }
  }

  @media (max-width: 425px) {
    padding: 2.5rem 1.2rem;

    img {
      height: 16.5rem;
      width: 16.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;
