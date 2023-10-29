import devices from "../../utilities/theme/devices";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    .image-container {
      width: 100% !important;

      img {
        width: 100% !important;
        object-fit: cover;
      }
    }
  }

  @media ${devices.mobile} {
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    .image-container {
      width: 100% !important;

      img {
        width: 100% !important;
        object-fit: cover;
      }
    }
  }
`;
