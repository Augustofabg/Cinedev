import styled from "styled-components";

export const Img = styled.img`
  width: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${props => props.$scrolll ? '#000' : 'transparent'};
  transition: background-color ease-in-out 1s;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40px;
  }

`;

export const Menu = styled.ul`
  display: flex;
  margin-right: 45px;
  gap: 30px;

  @media screen and (max-width: 500px) {
    display: flex;
    padding-left: 50px;
  }

  
`;

export const Li = styled.li`
 font-weight: 600;
 font-size: 20px;
 cursor: pointer;
 position: relative;

 a{
    text-decoration: none;
    color: white;
  
 }
 

 &::after {
    content: '';
    height: 3px;
    width: ${props => props.$isActive ? '100%' : '0'};
    background-color: #189B20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: all ease 0.3s;
  }
  
 &:hover::after {
    width: 100%;
  }

  `;
