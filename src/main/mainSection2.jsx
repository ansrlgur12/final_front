import React from "react";
import { styled } from "styled-components";
import itemp1 from "../images/itemp1.jpg";
import itemp2 from "../images/itemp2.jpg";
import itemp3 from "../images/itemp3.jpg";

const Section2 = styled.div`
    margin-top: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    
    .container2{
        width: 90vw;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap; /* 추가: 요소들을 여러 줄로 나열 */

    }
    .item{
        margin: 0;
        padding: 0;
    }
    .item1{
        width: 38vw;
        height: 500px;
        margin-right: 2vw;
        background-image: url(${itemp1});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .item2{
        width: 50vw;
        background-image: url(${itemp2});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .item3{
        width: 100vw;
        height: 500px;
        margin-top: 4vh;
        background-image: url(${itemp3});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .itemtext{
        color: white;
        font-size: 2rem;
        margin-left: 40px;
    }
    .itemBtn {
        width: 100px;
        font-size: 1.4rem;
        margin: 10px 0 0 40px;
    }
`;

const MainSection2 = () => {
    return (
        <Section2>
            <div className="container2">
                <div className="item item1">
                    <div className="itemtext">새로운 제품을 만나보세요!</div>
                    <button className="itemBtn">shop</button>
                </div>
                <div className="item item2">
                    <div className="itemtext">새로운 제품을 만나보세요!</div>
                    <button className="itemBtn">shop</button>
                </div>
                <div className="item item3">
                    <div className="itemtext">새로운 제품을 만나보세요!</div>
                    <button className="itemBtn">shop</button>
                </div>
            </div>
        </Section2>
    );
};

export default MainSection2;
