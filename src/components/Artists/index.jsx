import styled from "styled-components"
import "./style.css"
import joji from "../../assets/jojiProfile.jpg"

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
    display: flex;
    gap: 4rem;
    flex-direction: column;

    :hover {
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
        height: 80vh;
    }

    @media (min-width: 200px) {
        padding: 1rem 1.4rem;
    }
`


const H2 = styled.h2`
    display: block;
    margin: 0 auto;
    font-size: clamp(1rem, 2vw + 1rem, 4rem);
`


const Title = styled.h3`
    font-size: clamp(1.5rem, 1.5vw + 1rem, 4rem);
    line-height: clamp(1rem, 2vw + 1rem, 3rem);

`

const ImgProfile = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
`

const DivTitle = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
`

const DivTitleCenter = styled.div`
    display: flex;
    align-items: center;
    padding: 3rem;
`



export default function Artist() {

    return (
        <Body>
            <H2>Seu principal blog de notícia!</H2>

            <Grid>
                <DivGrid className="div">

                    <DivTitle className="divTitle">
                        <ImgProfile src={joji} alt="" />

                        <DivTitleCenter>
                            <Title>JOJI</Title>
                        </DivTitleCenter>
                        
                    </DivTitle>
                    

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid consequuntur repellat nesciunt tenetur iste dolorum ullam aperiam sunt quis culpa, quidem omnis numquam consectetur perspiciatis provident? Aut provident repellat est!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, in nobis? Corrupti alias asperiores, illum adipisci earum similique, voluptatibus possimus dolorem officiis non minus quasi explicabo aliquam placeat, impedit accusamus.</p>
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