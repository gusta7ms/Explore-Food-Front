import { Container, Content } from "./styled.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <img src="/src/assets/banner.svg" alt="Banner de Apresentação" />

        <Slider category="meals" />
        <Slider category="desserts" />
        <Slider category="drinks" />
      </Content>

      <Footer />
    </Container>
  );
}
