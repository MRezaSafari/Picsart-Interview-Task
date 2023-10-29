import styled from "styled-components";

export const ImageContainer = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #d6d6d6;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  border-radius: 10px;
`;
