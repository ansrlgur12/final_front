import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import MainSection1 from './mainSection1';


export const MainPageStyle = styled.div`

`;

const MainPage = () => {
   
    return (
        <MainPageStyle>
            <MainSection1/>
        </MainPageStyle>
    );
};

export default MainPage;
