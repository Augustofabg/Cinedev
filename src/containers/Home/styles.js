import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    width: 100%;
    height: 105%;
  }

  &::after {
    content: "";
    background-image: linear-gradient(to top,  #0f0f0f, rgba(0, 0, 0, 0.0));
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1135px;


  @media screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;


export const Containertext = styled.div`
  z-index: 2;
  position: relative;
  padding: 20px;
  width: 50%;


  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
    color: white;

    @media screen and (max-width: 500px) {
      font-size: 3rem;
      margin-bottom: -27px;
    }


  }

  p {
    color: white;
    font-size: 12px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 20px;

    @media screen and (max-width: 500px) {
      font-size: 15px;
      text-align: center;
      padding: 13px;
    }
  }

  div {
    @media screen and (max-width: 500px) {
      display: flex;
    }
  }
`;

export const Poster = styled.div`
  z-index: 2;
  position: relative;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  img {
    width: 250px;
    border-radius: 36px;


    @media screen and (max-width: 500px) {
      width: 210px;
      margin-bottom: -150%;
    }

    @media screen and (max-width: 400px) {
      margin-bottom: -120%;
    }
  }
`;
