import styled from "styled-components"

const Body = styled.section`
    height: 100vh;
    width: 100%;
    background: linear-gradient(#171212, #000);
    color: #fff;
    padding: 1rem;
`

const Title = styled.h1`
    font-size: 2.5rem;
`


export default function Artist() {
    return (
        <Body>
            <Title>Sua principal fonte de informação de artista</Title>
        </Body>
    )
}