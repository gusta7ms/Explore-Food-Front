import { Container } from "./styled.js";

// eslint-disable-next-line react/prop-types
export function Tag({ title, ...rest }) {
  return (
    <Container {...rest}>
      <span>{title}</span>
    </Container>
  );
}
