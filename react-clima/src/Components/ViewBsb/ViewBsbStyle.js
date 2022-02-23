import styled from "styled-components";

export const ContainerBsb = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 400px;

    .animationbsb{
        animation: CardBsb 1.8s ease-in-out forwards;
    }


    @keyframes CardBsb {
        0%,50%{
            opacity: 0;
            transform: translateX(-35px);
        }
        100%{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;

export const BoxBsb = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    text-align: center;
    opacity: 0;
`;

export const ContainerApiBSb = styled.div`
    width: 100%;
    height: 100%;
`;