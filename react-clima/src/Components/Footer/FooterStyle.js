import styled from "styled-components";

export const ContainerFooter = styled.footer`
    width: 100%;
    min-height: 60px;
    padding: 0px 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0,128,205, 0.7);
    flex-shrink: 0;

    @media (max-width: 500px){
        padding: 0px 10px;
        font-size: 10px;
    }
`;

export const TitleFooter = styled.h3`
    color: #fff;
    text-shadow: 1px 1px #000;
`;