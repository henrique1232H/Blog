import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";


const Blur = styled.div`
    height: 90vh;
    background: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-end;
    padding: 0 2rem 5rem 2rem;
`
const P = styled.p`
    color: #fff;
    font-size: clamp(0.4rem, 1vw + 1rem, 4rem);

`

export default function CarouselMain() {

    return (
        <Carousel fade>
             <Carousel.Item>

                <div className='joji'>
                    <Blur>
                        <P>Como um artista que era um youtuber virou um dos maiores cantores da sua geração?</P>
                    </Blur>
                </div>
            </Carousel.Item>

            <Carousel.Item>

                <div className='tyler'>
                    <Blur>
                        <P>aa</P>
                    </Blur>
                </div>
            </Carousel.Item>


            <Carousel.Item>

                <div className='jcole'>
                    <Blur>
                        <P>Teste</P>
                    </Blur>
                </div>

            </Carousel.Item>

        </Carousel>
    )
}