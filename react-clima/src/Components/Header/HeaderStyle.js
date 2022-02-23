import styled from 'styled-components'

export const ContainerHeader = styled.header`
    width: 100%;
    margin-bottom: 1em;
`;

export const Nav = styled.nav`
    width: 100%;
    height: 75px;
    background-color: rgb(0,128,205);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    position: absolute;
    left: 20px;
    width: 65px;
    height: 65px;
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
`;
