import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  svg {
    width: 35px;
    height: 35px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(61deg) brightness(105%) contrast(102%);
    
  }
  @media screen and (max-width: 800px){
    left: -14%;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  color: white;
`;