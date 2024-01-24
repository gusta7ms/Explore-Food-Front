import { Container } from "./styled.js";
import { useState } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";
import { TbArrowBadgeRight } from "react-icons/tb";
import { GoHeart, GoHeartFill } from "react-icons/go";

import FoodOne from "../../assets/food_disc_1.png";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

export function Card({...rest}) {
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

      <img src={FoodOne} alt="Foto do prato de Comida" />
      <ButtonText
        className="nameDish"
        title="Prato 1"
        icon={TbArrowBadgeRight}
      />

      <p>Lorem ipsum, dolor sit abet consectetur adipisicing edit.</p>
      <h4>R$ 100,50</h4>

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
