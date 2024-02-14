// components/DishDetail/index.jsx
import { Container } from "./styled.js";
import itensData from "../../utils/index.json";

import { Tag } from "../Tag";
import { ButtonText } from "../ButtonText";

export function DishDetail() {
  const itemId = 1;
  const selectedItem = itensData.find((item) => item.id === itemId);

  const { category, name, description, value, img, tags } = selectedItem;

  return (
    <Container>
      <ButtonText title="Voltar" />
      <div className="Content">
        <img src={img} alt={name} />
        <div className="Details">
          <h2>{name}</h2>
          <p>{category}</p>
          <p>{description}</p>
          <p>{value}</p>
          <div className="TagsMap">
            {tags.map((item) => (
              <Tag title={item} key={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
