import styled from "styled-components";

export const ContainerForest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: auto;
    border: 1px solid #0000ff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px -2px #fff;

    @media (max-width: 580px) {
        padding: 0px 30px;
        
    }
`;

export const ForestDay = styled.p`
    color: #fff;
    text-shadow: 1px 1px #000;
`;

export const ForestIcon = styled.img`
    position: relative;
    bottom: 5px;
`;

export const BoxTempMaxMin = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    bottom: 15px;
    gap: 10px;
    @media (max-width: 580px) {
        font-size: 12px;
        
    }
`;

export const ForestMaxTemp = styled.p`
    color: #fff;
    text-shadow: 1px 1px #000;
`;

export const ForestMinTemp = styled.p`
    color: rgba(255, 255, 255, .6);
    text-shadow: 1px 1px #000;
`;

export const DescripForest = styled.p`
    color: #fff;
    text-shadow: 1px 1px #000;
    position: relative;
    bottom: 17px;
    font-size: 9px;
    width: 98px;

    @media (max-width: 580px) {
        font-size: 9px;
        
    }
`;