import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
`;

export const TitleCard = styled.h3`
    width: 200px;
    font-size: 18px;
    color: #fff;
    padding: 5px 10px;
    border: 1px solid #0000FF;
    border-radius: 15px;
    background-color: #4169E1;
    text-shadow: 1px 1px #000;
    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
`;

export const BoxHumidity = styled.div`
    width: 175px;
    height: 175px;
    background-color: rgba(0, 0, 0, 1);
    border: 3px solid #0000FF;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardHumidity = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
`;

export const SVG = styled.svg`
    width: 150px;
    height: 150px;
`;

export const CircleOne = styled.circle`
    width: 150px;
    height: 150px;
    fill: none;
    stroke: #000;
    stroke-width: 10px;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;


    &:nth-child(1){
        stroke-dashoffset: 0;
        stroke: #6495ED;
    }

    &:nth-child(2){
        stroke: blue;
        transition: stroke-dashoffset 1s;
    }
`;

export const NumberProgress = styled.p`
    color: #fff;
    font-size: 20px;
`;

export const BoxNumber = styled.div`
    position: relative;
    bottom: 75px;
    left: 0;
    width: 100%;
    height: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;