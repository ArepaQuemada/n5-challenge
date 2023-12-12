import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Image = styled.div<{
  backgroundImage: string;
}>`
  width: 55px;
  height: 55px;
  background-size: cover;
  background-position: center;
  margin: 0 10px;
  animation: ${fadeAnimation} 0.7s;
  background-image: ${(props) => `url(${props.backgroundImage})`};
`;
