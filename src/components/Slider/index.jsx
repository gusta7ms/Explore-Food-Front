import { Container } from "./styled";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "../Card";

export function Slider() {
  const [sliderPreview, setSliderPreview] = useState(4);

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

  const data = [
    {
      id: 1,
      category: "vegan",
      name: "Vegano 01",
      description: "Um prato com cheio de veganismo",
      value: 111.11,
      img: "/src/assets/food_disc_1.png",
    },
    {
      id: 2,
      category: "vegan",
      name: "Vegano 02",
      description: "Veganismo puro",
      value: 222.22,
      img: "/src/assets/food_disc_2.png",
    },
    {
      id: 3,
      category: "carnivore",
      name: "Carnivoro 03",
      description: "Um prato com cheio de Carne",
      value: 333.33,
      img: "/src/assets/food_disc_3.png",
    },
    {
      id: 4,
      category: "carnivore",
      name: "Carnivoro 04",
      description: "Carne Pura",
      value: 444.44,
      img: "/src/assets/food_disc_4.png",
    },
    {
      id: 5,
      category: "carnivore",
      name: "Carnivoro 05",
      description: "Carne Pura",
      value: 555.55,
      img: "/src/assets/food_disc_5.png",
    },
    {
      id: 6,
      category: "carnivore",
      name: "Carnivoro 06",
      description: "Carne Pura",
      value: 666.66,
      img: "/src/assets/food_disc_6.png",
    },
    {
      id: 7,
      category: "carnivore",
      name: "Carnivoro 07",
      description: "Carne Pura",
      value: 777.77,
      img: "/src/assets/food_disc_7.png",
    },
    {
      id: 8,
      category: "carnivore",
      name: "Carnivoro 08",
      description: "Carne Pura",
      value: 888.88,
      img: "/src/assets/food_disc_8.png",
    },
    {
      id: 9,
      category: "carnivore",
      name: "Carnivoro 09",
      description: "Carne Pura",
      value: 999.99,
      img: "/src/assets/food_disc_9.png",
    },
    {
      id: 10,
      category: "carnivore",
      name: "Carnivoro 10",
      description: "Carne Pura",
      value: 1000.1,
      img: "/src/assets/food_disc_10.png",
    },
  ];

  return (
    <Container>
      <div>
        <Swiper
          slidesPerView={sliderPreview}
          pagination={false}
          navigation
          spaceBetween={10}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
