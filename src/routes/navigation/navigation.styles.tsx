import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { BaseButton } from '../../components/button/button.styled';
import { CartIconContainer } from '../../components/cart-icon/cart-icon.styles';

export const NavItem = styled.li`
  list-style: none;
`
export const NavigationContainer = styled.div`
  /* height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px; */
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  padding:0 40px;
  
  & .menu-icon {
    display: none;  
  }

  @media screen and (max-width: 960px) {
    & .menu-icon {
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-223%,-50%);
      font-size: 1.8rem;
      cursor: pointer;
      color: white;
    }
    
    ${NavItem}{
      display: none;
    }
  }
  
  @media screen and (max-width: 400px) {
    & .menu-icon {
      left: 94%;
    }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 20px;
  justify-content: flex-end;
  transition: all .3s;
  @media screen and (max-width: 800px){
    ${CartIconContainer}{
    top: -24%;
    left: -34%;
    margin-left: 0;
    }
  }
  @media screen and (max-width: 400px){
    ${CartIconContainer}{
    top: -24%;
    left: -30%;
    }
  }
`;


export const NavLink = styled(Link)`
  padding: 10px 25px;
  cursor: pointer;
  color: white;
  ${BaseButton}{
    background-color: black;
    border-color: white;
    color: white;
    font-weight: 900;
    min-width: 80px;
    height: 38px;
    padding: 0;
    &:hover{
      background-color: white;
      color: black;
      border-color: black;
      transition: all .4s ease-out;
    }
  }
`;

export const NavLinksActive = styled.ul`
  display: flex;
  background: #242222;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 75px;
  left: 0;
  animation: RightToLeft .3s ease;

  ${NavItem}{
    display: block;
    height: 80px;
  }

  ${NavLink}{
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @keyframes RightToLeft{
  from {
    opacity: 0.5;
    left: -100%
  }
  to{
    opacity: 1;
    left: 0;
  }
}`

export const NavLinkActiveContainer = styled.div`
  ${CartIconContainer}{
      top: -24%;
      left: -116%;
  }

  @media screen and (max-width: 400px){
    ${CartIconContainer}{
      top: -24%;
      left: -84%;
    }
  }
  
`


