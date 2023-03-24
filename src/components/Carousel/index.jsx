import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

import joji from "../../assets/joji.jpg";
import tyler from "../../assets/tyler_the_creator.jpg";

import styled from 'styled-components';

const Img = styled.img`
    height: 100vh;
    width: 100%;

    @media (max-width: 80rem ) {
        width: 100%;
        height: 40vh;
    }
`


export default function CarouselA() {

    return (
        <Carousel fade>
            <Carousel.Item>

                <Img src={joji} />


                <Carousel.Caption>
                    <h1>Teste</h1>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>

                <Img src={tyler} />

            </Carousel.Item>
        </Carousel>
    )
}