import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100%;

  grid-template-columns: 1;
  grid-template-rows: 104px auto 78px;
  grid-area: "header" "content" "footer";

  background-color: ${({ theme }) => theme.DARK.Dark_400};
`;
export const Content = styled.main`
  margin-top:5rem ;

  img {
    width: 100%;
    margin-bottom:50px;
  }
  grid-area: content;

  height: auto;
  padding: 48px 100px;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 48px 86px;
  }

  @media (max-width: 916px) {
    padding: 28px 70px;
  }

  @media (max-width: 866px) {
    padding: 28px 20px;
  }
  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    img {
      display: none;
    }
  }
`;
