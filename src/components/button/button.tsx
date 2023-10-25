import React, { FC, ReactNode } from "react";
import { StyledButton } from "./button.styles";

interface Props {
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<Props> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
