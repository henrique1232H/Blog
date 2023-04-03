import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

import tyler from "../../assets/tyler_the_creator.jpg";
import jcole from "../../assets/jCole.jpg"

import styled from 'styled-components';

const Img = styled.img`
    height: 100vh;
    width: 100%;

    @media (max-width: 80rem ) {
        width: 100%;
        height: 40vh;
    }
`

const Blur = styled.div`
    height: 100vh;
    background: rgba(0,0,0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5rem;
`
const H1 = styled.h2`
    color: #fff;

`

export default function CarouselA() {

    return (
        <Carousel fade>
             <Carousel.Item>

                <div className='joji'>
                    <Blur>
                        <H1>Como um artista que era um youtuber virou um dos maiores cantores da sua geração?</H1>
                    </Blur>
                </div>
            </Carousel.Item>

            <Carousel.Item>

                <div className='tyler'>
                    <Blur>
                        <H1>aa</H1>
                    </Blur>
                </div>
            </Carousel.Item>


            <Carousel.Item>

                <div className='jcole'>
                    <Blur>
                        <H1>Teste</H1>
                    </Blur>
                </div>

            </Carousel.Item>

        </Carousel>
    )
}