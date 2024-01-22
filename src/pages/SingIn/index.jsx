import { Container, From } from "./styled";
import { useNavigate } from "react-router-dom";

import LogoImg from "../../assets/Logo.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SingIn() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/register");
  }

  return (
    <Container>
      <img src={LogoImg} alt="Logo Food Explore" />


      <From>
        <span>Faça o seu login</span>

        <Input
          type="email"
          title="Digite o seu Email."
          placeholder="Exemplo: maria@gmail.com"
        />

        <Input
          type="password"
          title="Digite o sua senha."
          placeholder="Mínimo 6 caracteres"
        />

        <Button title="Entrar" />
        <ButtonText title="Criar Conta" onClick={handleBack} />
      </From>
    </Container>
  );
}
