import styled from "styled-components";


export const CityName = styled.p`
    font-size: 40px;
    color: #fff;
    text-shadow: 2px 1px #000;
    margin-bottom: 0px;

    @media (max-width: 580px) {
        font-size: 30px;
    }

    @media (max-width: 425px) {
        font-size: 25px;
    }

    @media (max-width: 350px) {
        font-size: 20px;
    }
`;

export const ImageWheater = styled.img`
    width:65px;
    height: auto;

    @media (max-width: 580px) {
        width: 55px;
    }

    @media (max-width: 425px) {
        width: 45px;
    }

    @media (max-width: 350px) {
        width: 45px;
        margin-bottom: 3px;
    }
`;

export const Card = styled.div`
    width: 550px;
    height: auto;
    padding: 2em 1em;
    background-color: rgba(100, 149, 237, 0.5);
    box-shadow: 0px 0px 15px 1px #0000FF;
    border: 1px solid #0000FF;
    border-radius: 15px;

    @media (max-width: 580px) {
        width: 400px;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const Description = styled.p`
    color: #fff;
    font-size: 14px;
    position: relative;
    text-shadow: 1px 1px #000;
    top: -15px;

    @media (max-width: 580px) {
        font-size: 13px;
    }

    @media (max-width: 425px) {
        font-size: 12px;
    }

    @media (max-width: 350px) {
        font-size: 12px;
    }
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

    @media (max-width: 580px) {
        font-size: 40px;
    }

    @media (max-width: 425px) {
        font-size: 33px;
    }

    @media (max-width: 350px) {
        font-size: 30px;
    }
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
