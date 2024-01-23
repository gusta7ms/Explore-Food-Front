import { Container } from "./styles.js";
import LogoImg from "../../assets/Logo.svg"

export function Footer() {
  return (
    <Container>
      <img src={LogoImg} alt="Logo Food Explore" />
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}