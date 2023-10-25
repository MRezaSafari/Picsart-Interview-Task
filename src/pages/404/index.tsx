import React, { FC } from "react";
import { Container } from "./FourZeroFour.styles";

interface Props {}

const Page404: FC<Props> = () => {
  return (
    <Container>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </Container>
  );
};

export default Page404;
