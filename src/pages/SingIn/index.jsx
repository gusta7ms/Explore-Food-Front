import { useNavigate } from "react-router-dom";
import { Container, From } from "./styled";

import LogoImg from "../../assets/hex.svg";

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
      <div>
        <img src={LogoImg} alt="" />
        <h1>Food Explore</h1>
      </div>

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
