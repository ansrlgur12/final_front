import React from "react";
import styled from "styled-components";

const InfoStyled = styled.div`
    background-color: black;
    color: white;
    border-radius: 10px;
    height: 1.2em;
    padding: 5px;
    text-align: center;
    line-height: 1;
 `;

const InfoWindow = (position) => {
    console.log(position)

    function stripHtmlTags(html) {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    return (
        <InfoStyled>
            <div className="label">
                {stripHtmlTags(position.position.Ma)}
            </div>
        </InfoStyled>
    );
};

export default InfoWindow;
