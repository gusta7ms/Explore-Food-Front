/* eslint-disable react/prop-types */
import { Container } from "./styled";

export function Input({ title,...rest }) {
  return (
    <Container>
      <span>{title}</span>

      <input {...rest} />
    </Container>
  );
}
