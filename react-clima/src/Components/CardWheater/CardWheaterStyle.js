import styled from "styled-components";


export const CityName = styled.p`
    font-size: 40px;
    color: #fff;
    text-shadow: 2px 1px #000;
    margin-bottom: 0px;
`;

export const ImageWheater = styled.img`
    width:65px;
    height: auto;
`;

export const Card = styled.div`
    width: 550px;
    height: auto;
    padding: 2em 1em;
    background-color: rgba(100, 149, 237, 1);
    box-shadow: 0px 0px 15px 1px #0000FF;
    border: 1px solid #0000FF;
    border-radius: 15px;

    @media (max-width: 580px) {
        width: 400px;
    }
`;

export const Description = styled.p`
    color: #fff;
    font-size: 14px;
    position: relative;
    text-shadow: 1px 1px #000;
    top: -15px;
`;

export const BoxInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const IconDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Temp = styled.div`
    display: block;
`;

export const CurrentTemp = styled.p`
    font-size: 45px;
    text-shadow: 1px 1px #000;
    color: #fff;
`;

export const BoxForest = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    

    @media (max-width: 580px) {
        overflow-x: scroll;
        justify-content: space-between;
        padding: 5px;

       /* width */
        ::-webkit-scrollbar {
        width: 20px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #0000FF; 
        border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #4169E1; 
        border-radius: 10px;
        }
    }
`;
