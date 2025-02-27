import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  border-radius: 40px;
  flex-direction: row-reverse;

  iframe {
    width: 700px;
    height: 400px;
    border: none;
  }

  button {
    background: none;
    border: none;
    color: green;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 52%;
    margin-top: -12%;
    margin-right: -35px;
    padding-right: 15px;
  }
`;

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
