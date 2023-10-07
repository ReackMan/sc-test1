import React from 'react';
import styled from 'styled-components';
import {StyledBtn} from "./components/StyledBtn.styled";
import {StyledCard} from "./components/StyledCard.styled";
import img1 from './assets/images/img1.png'

function App() {
    return (
        <Box>
            <StyledCard titleSize='16px'>
                <img src={img1} alt=""/>
                <h1>Headline</h1>
                <span>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                </span>
                <BtnBox>
                    <StyledBtn color='#fff' bgColor='#4E71FE' fontSize='10px'>See more</StyledBtn>
                    <StyledBtn color='#4E71FE' bgColor='transparent' fontSize='10px'>Save</StyledBtn>
                </BtnBox>
            </StyledCard>
        </Box>

    );
}

const Box = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const BtnBox = styled.div`
  margin: 0 0 0 20px;
  align-self: start;
  display: flex;
  gap: 12px;
`


export default App;
