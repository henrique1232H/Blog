import styled from "styled-components"
import "./style.css"

const Body = styled.section`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(#171212, #000);
    color: #fff;
    padding: 2rem 2rem;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-top: 1rem;

    @media (min-width: 700px) and (max-width:999px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1000px) and (max-width: 1550px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width:1600px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const DivGrid = styled.div`
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    height: 30vh;
    width: 100%;
    border-radius: 1rem;
    transition: 250ms all ease-in-out;
    padding: 1rem 1.4rem;

    :hover {
        background: linear-gradient(black, #ff1c1cb6);
        height: 40vh;
    }
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
    display: flex;
    scr

    :active {
        display: none;
    }
`

const Title = styled.h3`
    font-size: clamp(1.5rem, 2vw + 1rem, 4rem);
    line-height: clamp(1rem, 2vw + 1rem, 3rem);

`


export default function Artist() {

    const divClick = () => {
        window.prompt("hello")
    }

    return (
        <Body>
            <h2>Seu principal blog de notícia</h2>

            <Grid>
                <DivGrid onClick={divClick}>
                    <Title>teste</Title>
                </DivGrid>

                <DivGrid>
                    <Title>teste</Title>
                </DivGrid>

                <DivGrid>
                    <Title>Teste</Title>
                </DivGrid>

                <DivGrid>
                    <Title>Teste</Title>
                </DivGrid>

                <DivGrid>
                    <Title>Teste</Title>
                </DivGrid>

                <DivGrid>
                    <Title>Teste</Title>
                </DivGrid>
            </Grid>
        </Body>
    )
}