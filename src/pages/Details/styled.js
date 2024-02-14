import styled from "styled-components";
// import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100%;

  grid-template-columns: 1;
  grid-template-rows: 104px auto 78px;
  grid-area: "header" "content" "footer";

  background-color: ${({ theme }) => theme.DARK.Dark_400};
`;
