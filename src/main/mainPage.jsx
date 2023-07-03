import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import MainSection1 from './mainSection1';
import Header from './header';
import { UserContext } from '../API/UserInfo';
import { useNavigate } from 'react-router-dom';


export const MainPageStyle = styled.div`

`;


const MainPage = () => {
    const context = useContext(UserContext);
    const { IsLogin } = context;
    const nav = useNavigate();
   
    return (
        <>
            <MainPageStyle>
                <Header/>
                <MainSection1/>
            </MainPageStyle> :

        </>
    );
};

export default MainPage;
