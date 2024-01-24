import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
position: relative;

h2 {
  font-size: 32px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.LIGHT.Light_100};
  font-weight: 500;
}

.swiper {

  width: 100%;
  height: 100%;
  overflow: hidden;

  margin-bottom: 47px;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}

.swiper-button-prev::after{
  height: 50px;
  width: 50px;

  color: ${({ theme }) => theme.LIGHT.Light_100};
  font-size: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:-20px;
}

.swiper-button-next:after{
  height: 50px;
  width: 50px;

  color: ${({ theme }) => theme.LIGHT.Light_100};
  font-size: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right:-20px;
}


@media (max-width: ${DEVICE_BREAKPOINT.MD}) {
  margin:0;

  h2 {
    font-size: 24px;
  }

  .swiper-slide{
    margin: 0 10px;
  }
}

`;
