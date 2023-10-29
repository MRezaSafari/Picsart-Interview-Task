import React from "react";
import Image from "../image";
import { Container } from "./expensive-component.style";
const ExpensiveComponent3 = () => {
  return (
    <Container>
      <div>
        <h3>Just for the demo [[ 3 ]]</h3>
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

export default ExpensiveComponent3;
