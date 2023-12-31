import devices from "../../utilities/theme/devices";
import styled from "styled-components";

export const BannerContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === "light" ? "#f9f8fd" : "#191919"};
  padding: 40px 0;
  margin-top: 20px;
`;

export const BannerContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:first-of-type {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
      font-size: 4rem;
    }

    p {
      line-height: 25px;
    }
  }

  > div:last-of-type {
    width: 40%;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    > div {
      width: 100% !important;
    }
  }

  @media ${devices.mobile} {
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    > div {
      width: 100% !important;
    }

    .image-container {
      width: 100% !important;

      img {
        width: 100% !important;
        object-fit: cover;
      }
    }
  }
`;

export const Banner = styled.div`
  background: url("/images/banner.webp");
  width: 100%;
  height: 276px;
  border-radius: 10px;
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  @media ${devices.desktop} {
    color: #000;
  }
  @media ${devices.tablet} {
    background: none;
  }

  @media ${devices.mobile} {
    background: none;
  }

  h2 {
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    display: block;
  }
`;

export const AboutText = styled.p`
  text-align: center;
  font-weight: 100;
  margin: 6rem 0;
  line-height: 30px;
  color: #8f8f8f;
`;
