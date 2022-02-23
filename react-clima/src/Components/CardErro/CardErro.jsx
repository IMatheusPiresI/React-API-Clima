import React from "react";
import { ContainerErro, CardError, ErroImage, ErroMessage } from "./CarErroStyle";
import error from '../../Images/error.gif'

function CardErro(){
    return(
        <ContainerErro className="animationCard">
             <CardError id="card-error">
                <ErroImage src={error} alt='Error'/>
                <ErroMessage>Cidade não Encontrada</ErroMessage>
            </CardError>
        </ContainerErro>
           
    )
}

export default CardErro;