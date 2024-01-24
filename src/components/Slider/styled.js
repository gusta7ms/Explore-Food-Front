import styled from "styled-components";
import { DEVICE_BREAKPOINT } from '../../styles/deviceBreakpoints'

export const Container = styled.div`

.swiper {
  width: 100%;
  height: 100%;
  /* margin-right: 10px; */
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

}

@media (max-width: ${DEVICE_BREAKPOINT.MD}) {
  margin:0;
  .swiper-slide{
    margin: 0 10px;
  }
}

`;
