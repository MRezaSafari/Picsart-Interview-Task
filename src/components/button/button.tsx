import React, { FC, ReactNode } from "react";
import { StyledButton } from "./button.styles";

interface Props {
  mode?: "primary" | "danger";
  onClick?: () => void;
  children: ReactNode;
  loading?: boolean;
}

const Button: FC<Props> = ({
  onClick,
  children,
  mode = "primary",
  loading = false,
}) => {
  return (
    <StyledButton className={mode} mode={mode} onClick={onClick}>
      {loading ? "Saving..." : children}
    </StyledButton>
  );
};

export default Button;
