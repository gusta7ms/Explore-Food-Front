import { Container } from "./styled";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import itensData from "../../utils"

import { Card } from "../Card";

export function Slider() {
  const [sliderPreview, setSliderPreview] = useState(4);
  const [navigationON, setNavigationON] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setSliderPreview(4);
      }
      if (window.innerWidth < 896) {
        setSliderPreview(3);
      }
      if (window.innerWidth < 768) {
        setSliderPreview(2);
        setNavigationON(false)
      }
      if (window.innerWidth < 520) {
        setSliderPreview(1);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <Container>
      <div>
        <h2>Categoria dos Pratos</h2>
        <Swiper
          slidesPerView={sliderPreview}
          pagination={false}
          navigation={navigationON}
          spaceBetween={10}
          loop={true}
        >
          {itensData.map((item) => (
            <SwiperSlide key={item.id}>
              <Card data={item} />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </Container>
  );
}
