import React from "react";
import TimeCity from "../../Components/TimeCity/TimeCity";
import CardErro from "../../Components/CardErro/CardErro";
import ViewBsb from "../ViewBsb/ViewBsb";
import { Container, BoxCard, BoxLoading, Loading, Cards, AnimationCard } from "./BoxCardsStyle";


function BoxCards({forest, loading, erro, city, country, img, description, temp, humidity}){

    return(
        <Container>
            <BoxCard>
                <ViewBsb forest={forest}/>
                <BoxLoading>
                    <Loading src={loading}/>
                </BoxLoading>
                <Cards id="cards">
                    <AnimationCard id="animationCard">
                        {erro ? <CardErro/> : <TimeCity
                            city={city}
                            country={country}
                            img={img}
                            description={description}
                            temp={temp}
                            forest={forest}
                            day={forest.dt}
                            humidity={humidity}
                        />}
                    </AnimationCard>
                </Cards>
            </BoxCard>
        </Container>
    )
}
export default BoxCards;