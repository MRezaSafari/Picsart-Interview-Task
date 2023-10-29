import styled from "styled-components";

export const StyledButton = styled.button<{ mode: "primary" | "danger" }>`
  background-color: ${(props) => (props.mode === "primary" ? "blue" : "red")};
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px 14px;
  width: max-content;
  cursor: pointer;
  transition: all ease 400ms;

  &:hover {
    background-color: blueviolet;
  }
`;
