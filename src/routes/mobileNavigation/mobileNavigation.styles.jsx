import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BaseButton } from '../../components/button/button.styled';

export const NavigationContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavLinksActive = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    background: #242222;
`

export const NavItem = styled.li`
  list-style: none;
`

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
