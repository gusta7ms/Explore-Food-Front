import { Container, From } from "./styled";
import { useNavigate } from "react-router-dom";

import LogoImg from "../../assets/Logo.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SingUp() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <img src={LogoImg} alt="Logo Food Explore" />

      <From>
        <span>Crie sua conta</span>

        <Input
          type="text"
          title="Digite o seu Nome."
          placeholder="Exemplo: Maria Da Silva"
        />

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

        <Button title="Cadastro" />

        <ButtonText title="Já tenho uma Conta" onClick={handleBack} />
      </From>
    </Container>
  );
}
