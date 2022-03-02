import styled from 'styled-components'

export const ContainerHeader = styled.header`
    width: 100%;
    margin-bottom: 1em;
`;

export const Nav = styled.nav`
    width: 100%;
    height: 75px;
    background-color: rgb(0,128,205, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 45px;
    height: 45px;

    @media (max-width: 1100px){
        width: 50px;
        height: 50px;
    }

    @media (max-width: 300px){
        width: 35px;
        height: 35px;
    }
`;

export const BuscaCity = styled.input`
    background-color: #0267a3;
    width: 400px;
    padding: 15px 15px;
    border-radius: 10px;
    outline: none;
    border: 2px solid #000;
    color: #fff;

    &::placeholder{
        color: #fff;
    }

    @media (max-width: 1100px){
        width: 250px;
    }

    @media (max-width: 700px){
        width: 200px;
    }

    @media (max-width: 350px){
        width: 50%;
        padding: 10px 5px;
        ::-webkit-input-placeholder{
            font-size: 10px;
            word-wrap: break-word;
        }
    }
`;

export const BoxLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 20px;

    @media (max-width: 700px){
        left: 5px;
    }
`;

export const NameSite = styled.h4`
    color: #FFF;
    text-shadow: 1px 1px #000;
    font-size: 25px;

    @media (max-width: 1100px){
        font-size: 22px;
    }

    @media (max-width: 700px){
        font-size: 16px;
        display: none;
    }
`;
