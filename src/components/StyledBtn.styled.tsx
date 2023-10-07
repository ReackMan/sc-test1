import styled from "styled-components";

type StyledBtnPropsType = {
    fontSize?: string,
    bgColor?: string,
    color?: string,
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  font-size: ${props => props.fontSize};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: 5px;
  border: 2px solid #4E71FE;
  padding: 0;
  width: 86px;
  height: 30px;
  font-style: normal;
  font-family: Inter,sans-serif;
  font-weight: 700;
  line-height: 20px; /* 200% */
  
`