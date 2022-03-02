import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ContainerInfos = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(100, 149, 237, 0);
    border-top: 1px solid #0000FF;
    border-bottom: 1px solid #0000FF;

    border-radius: 15px;
`;

export const InfoCity = styled.div`
    width: auto;
    height: auto;
    padding: 2em 1em;
    gap: 3em;
    display: flex;
   
   @media (max-width: 1400px){
    overflow-x: scroll;

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
