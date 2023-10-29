import React from "react";
import Image from "../image";
import { Container } from "./expensive-component.style";
const ExpensiveComponent1 = () => {
  return (
    <Container>
      <div>
        <h3>Just for the demo [[ 1 ]]</h3>
        <h2>Im a very expensive component ( Not really ) </h2>
      </div>
      <Image
        width={524}
        height={393}
        alt={"Header Hero Image"}
        lazy
        src="/images/aboutus.webp"
      />
    </Container>
  );
};

export default ExpensiveComponent1;
