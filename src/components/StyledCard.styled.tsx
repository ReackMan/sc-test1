import styled from 'styled-components';

type StyledCardPropsType = {
    titleSize: string
}

export const StyledCard = styled.div<StyledCardPropsType>`
  background-color: #fff;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
  box-sizing: border-box;
  
  img {
    width: 280px;
    height: 170px;
    flex-shrink: 0;
    border-radius: 10px;
    margin: 10px 10px 0 10px;
  }
  
  h1 {
    width: 70px;
    height: 19px;
    align-self: start;
    margin: 0 0 0 20px;
    font-size: ${props => props.titleSize};
    color: #000;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
  span {
    align-self: start;
    width: 260px;
    height: 40px;
    margin-left: 20px;
    color: #ABB3BA;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
  }
`