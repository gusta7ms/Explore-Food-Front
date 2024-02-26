/* eslint-disable react/prop-types */
import { Container, Content } from "./styled.js";
import { useState } from "react";

import dataBase from "../../utils/index.json";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

import { FiPlus, FiMinus, FiChevronLeft } from "react-icons/fi";

export function Details({ itemId = 1 }) {
  const item = dataBase.find((item) => item.id === itemId);

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <Container>
      <Header />

      <Content>
        <ButtonText icon={FiChevronLeft} title=" Voltar" />
        <div className="container">
          <img src={item.img} alt={item.name} />
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <ul>
              {item.tags.map((tag, index) => (
                <Tag title={tag} key={index} />
              ))}
            </ul>
            <div className="controlsDishes">
              <div className="numberDishes">
                <ButtonText icon={FiMinus} onClick={handleDecrement} />
                <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
                <ButtonText icon={FiPlus} onClick={handleIncrement} />
              </div>

              <Button className="addDishes" title={`Incluir - ${item.value}`} />
            </div>
          </div>
        </div>
      </Content>

      <Footer />
    </Container>
  );
}
