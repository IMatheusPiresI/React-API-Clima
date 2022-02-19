import React from "react";
import { ContainerErro, CardError, ErroImage, ErroMessage } from "./CarErroStyle";
import erro from '../../Images/erro.gif'

function CardErro(){
    return(
        <ContainerErro>
             <CardError id="card-error">
                <ErroImage src={erro} alt='Error'/>
                <ErroMessage>Cidade não Encontrada</ErroMessage>
            </CardError>
        </ContainerErro>
           
    )
}

export default CardErro;