import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  ul {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.textColor};
    }
  }
`;
