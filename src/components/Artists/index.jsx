import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import "./style.css"

const Body = styled.section`
    height: auto;
    width: 100%;
    background: linear-gradient(#171212, #000);
    color: #fff;
    padding: 4rem;
`
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 2.5rem;
`

const CarouselDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    cursor: pointer;
`

const CarouselBlock = styled.div`
    height: 50vh;
    width: 30%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 300ms all ease-in-out;

    :hover {
        height: 80vh;
    }

`

const Text = styled.div`
    display: inline;

    :active {
        display: none;
    }
`


export default function Artist() {

    const divClick = () => {
        window.prompt("hello")
    }

    return (
        <Body>
            <Flex>
                <Title>Sua principal fonte de informação de artista!</Title>


                <Carousel className="CarouselAS">
                    <Carousel.Item>

                        <CarouselDiv>

                            <CarouselBlock className="Joji" onClick={divClick}>
                                    <div className="backgroundJoji backgroundCard">
                                        <div className="carouselBlockImg" />
                                    </div>

                                    <h2>Joji</h2>

                                    <Text>
                                        <p>George Kusunoki Miller (ミラー・ジョージ・クスノキ?) (Osaka, 18 de setembro de 1992), conhecido como Joji, é um produtor de gravação japonês-australiano, cantor, compositor e ex-personalidade do YouTube.</p>

                                        <p>Durante o seu período de atividade no YouTube entre 2008 e 2017, produziu principalmente conteúdos humorísticos absurdos. Ele também postou músicas e vídeos críticos. Um de seus vídeos foi a origem do meme Harlem Shake do cantor Baauer, que foi responsável pela estréia da canção no topo da Billboard Hot 100.</p>
                                    </Text>
                            </CarouselBlock>

                            <CarouselBlock>
                                <div className="">

                                </div>
                                <h2>5</h2>
                            </CarouselBlock>

                            <CarouselBlock>
                                <h2>te</h2>
                            </CarouselBlock>

                        </CarouselDiv>

                    </Carousel.Item>

                    <Carousel.Item>

                        <CarouselDiv>
                            <CarouselBlock>
                                <h2>tr</h2>
                            </CarouselBlock>

                            <CarouselBlock>
                                <h2>tet</h2>
                            </CarouselBlock>

                            <CarouselBlock>
                                <h2>aa</h2>
                            </CarouselBlock>
                        </CarouselDiv>
                    </Carousel.Item>
                </Carousel>
            </Flex>
        </Body>
    )
}