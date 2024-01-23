import { Container, Content } from "./styled.js";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";

export function Home() {
  return (
    <Container>

      <Header />

      <Content>
        <Slider/>
      </Content>

      <Footer/>
    </Container>
  );
}
