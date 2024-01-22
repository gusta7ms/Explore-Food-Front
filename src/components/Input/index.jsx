/* eslint-disable react/prop-types */
import { Container } from "./styled";

export function Input({spanView = false, icon: Icon,title,...rest }) {
  return (
    <Container>
      {spanView && <span>{title}</span>}

      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>  
  );
}
