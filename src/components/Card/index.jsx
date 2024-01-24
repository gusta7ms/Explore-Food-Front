/* eslint-disable react/prop-types */
import { Container } from "./styled.js";
import { useState } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";
import { TbArrowBadgeRight } from "react-icons/tb";
import { GoHeart, GoHeartFill } from "react-icons/go";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

export function Card({data, ...rest}) {
  // eslint-disable-next-line no-unused-vars
  const { id, category, name, description, value, img } = data;

  const [quantity, setQuantity] = useState(1);
  const [fav, setFav] = useState(true);

  const handleFav = () => {
    setFav(!fav);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Container {...rest}>
      <div className="favButton">
        {fav ? (
          <ButtonText icon={GoHeart} onClick={handleFav} />
        ) : (
          <ButtonText icon={GoHeartFill} onClick={handleFav} />
        )}
      </div>

      <img src={img} alt="Foto do prato de Comida" />
      <ButtonText
        className="nameDish"
        title={name}
        icon={TbArrowBadgeRight}
      />

      <p>{description}</p>
      <h4>R$ {value}</h4>

      <div className="controlsDishes">
        <div className="numberDishes">
          <ButtonText icon={FiMinus} onClick={handleDecrement} />
          <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
          <ButtonText icon={FiPlus} onClick={handleIncrement} />
        </div>

        <Button className="addDishes" title="Incluir" />
      </div>
    </Container>
  );
}
