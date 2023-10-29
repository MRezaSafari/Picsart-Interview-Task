import styled from "styled-components";

export const Heading = styled.h1`
  margin: 30px 0 25px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SearchContainer = styled.div`
  margin-bottom: 20px;
  input {
    border: #e2e2e2;
    padding: 10px 20px;
    border-radius: 10px;
    min-width: 250px;
  }
`;

export const ModalContentsContainer = styled.div`
  textarea {
    width: 100%;
    resize: none;
    min-height: 200px;
    border: 1px solid;
    border-color: ${(props) =>
      props.theme.mode === "light" ? "#e2e2e2" : "#494646"};
    border-radius: 10px;
    padding: 8px;
    background-color: ${(props) =>
      props.theme.mode === "light" ? "white" : "#252424"};

    color: ${(props) => (props.theme.mode === "light" ? "black" : "white")};
  }
`;

export const ModalButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
