import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width: 100%;
    min-height: 60px;
    padding: 0px 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0,128,205, .9);
    flex-shrink: 0;
    box-shadow: 1px 1px 15px #0000FF;

    @media (max-width: 500px){
        padding: 0px 10px;
        font-size: 14px;
    }

    @media (max-width: 360px){
        padding: 0px 10px;
        font-size: 12px;
    }
`;

export const TitleFooter = styled.h3`
    color: #fff;
    text-shadow: 1px 1px #000;
`;