import { keyframes } from "styled-components";
import styled from "styled-components";

const scale = keyframes`
    from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.$image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 150px;
  margin-right: 120px;
  margin-top: -150px;
  z-index: 9;
  position: relative;

  img {
    border-radius: 30px;
    width: 300px;
    height: 100%;
    margin-right: 35px;
    animation: ${scale} 1s linear;
  }
`;

export const Areatext = styled.div`
  padding-right: 16%;
  margin-top: -11px;

  h1 {
    color: white;
    font-size: 50px;
    margin-top: 5px;
    display: flex;
  }

  p {
    color: white;
    font-size: 15px;
    margin-top: 5px;
    font-weight: 600;
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;

  iframe {
    height: 500px;
    width: 900px;
    border: none;
    border-radius: 20px;
    margin-bottom: 50px;
  }
`;
