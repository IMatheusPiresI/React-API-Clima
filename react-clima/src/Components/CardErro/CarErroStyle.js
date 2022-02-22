import styled from "styled-components";

export const CardError = styled.div`
    width: 350px;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6495ED;
    box-shadow: 0px 0px 15px 1px #0000FF;
    border: 1px solid #0000FF;
    border-radius: 25px;
    gap: 0em;
`;

export const ErroImage = styled.img`
    width: 200px;
    position: relative;
    bottom: 15px;

`;

export const ErroMessage = styled.p`
    font-size: 25px;
    text-align: center;
    color: #0000FF;
    text-shadow: 1px 1px #fff;
    animation: BlinkMessage 1.5s infinite ease-in-out;

    @keyframes BlinkMessage{
        0%,100%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
    }
`;

export const ContainerErro = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
`;