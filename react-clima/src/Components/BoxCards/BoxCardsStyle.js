import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const BoxCard = styled.div`
    width: 100%;
    padding-bottom: 2em;

    .animationCard{
        transition: 1s;
        animation: CardBsb 1.5s ease-in-out forwards;
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
export const Cards = styled.div`
    width: 100%;
    height: 100%;
`;

export const Loading = styled.img`
    width: 250px;
    text-align: center;
    position: relative;
    top: 2em;
`;
export const BoxLoading = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AnimationCard = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
