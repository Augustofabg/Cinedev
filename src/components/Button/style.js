import styled, {css} from "styled-components";

const buttonstyles = css`
  background: transparent;
  color: white;
  border: 3px solid white;
  font-weight: 800;
  font-size: 17px;
  padding: 11px 21px;
  border-radius: 38px;
  cursor: pointer;

  &:hover {
    background: white;
    color: red;
    transform: scale(1.05);
    transition: all ease 0.3s;
  }


  @media screen and (max-width: 400px) {
      font-size: 12px;
    }
`;

export const WhiteButton = styled.button`
  ${buttonstyles}
`;

export const RedButton = styled.button`
  ${buttonstyles}

  background: red;
  color: white;
  border: 3px solid red;
  margin-right: 10px;


  &:hover {
    background: red;
    color: white;
    transform: scale(1.05);
    transition: all ease 0.3s;
    box-shadow: rgba(255, 0, 0, 0.38) 0px 10px 20px, rgba(255, 0, 0, 0.42) 0px 6px 6px;
  }



`;
