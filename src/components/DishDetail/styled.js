import styled from "styled-components";
// import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints;'

export const Container = styled.div`
  display: grid;
  grid-area: content;

  height: 100%;
  width: 100vh;
  margin-top: 5rem;

  color: ${({ theme }) => theme.LIGHT.Light_300};

  padding: 24px 100px;

  > button {
    position: absolute;
    left: 0;
  }

  .Content {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 390px;
      width: 390px;
    }

    .TagsMap {
      display: flex;
      gap: 12px;
    }
  }
`;
