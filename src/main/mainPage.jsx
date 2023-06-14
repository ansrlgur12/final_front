import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import MainSection1 from './mainSection1';
import Header from './header';

export const MainPageStyle = styled.div`

`;

const MainPage = () => {
   
    return (
        <>
        <Header/>
        <MainPageStyle>
            <MainSection1/>
        </MainPageStyle>
        </>
    );
};

export default MainPage;
