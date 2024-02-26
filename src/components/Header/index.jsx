import { Container } from "./styled";
import { PiMagnifyingGlassLight, PiReceipt } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";

import LogoImg from "../../assets/Logo.svg";

import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

export function Header() {
  const numberOrders = 0;
  return (
    <Container>
      <ButtonText icon={FiMenu} className="ButtonOpenMenu"/>

      <img src={LogoImg} alt="" />

      <div className="Search">
        <Input
          type="text"
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlassLight}
        />
      </div>

      <Button
        title={`Pedidos (${numberOrders})`}
        icon={PiReceipt}
        className="buttonOrdersDesktop"
      />

      <ButtonText
        icon={PiReceipt}
        className="buttonOrdersMobile"
      />


      <ButtonText className="buttonSingOut" icon={GoSignOut} />
    </Container>
  );
}
