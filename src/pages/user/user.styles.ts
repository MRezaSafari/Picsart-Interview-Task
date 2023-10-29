import styled from "styled-components";

export const Heading = styled.h1`
  margin: 30px 0 25px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserInformationContainer = styled.div`
  margin-top: 30px;

  > div {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
  img {
    aspect-ratio: 9/16;
    object-fit: cover;
    border-radius: 10px;
  }
`;
