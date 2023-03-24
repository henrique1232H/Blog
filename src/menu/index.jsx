import styled from "styled-components"

const Aside = styled.aside`
    position: fixed;
    z-index: 2;
    width: 100%;
    background: rgba(0,0,0, 0.8);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const H1 = styled.h1`
    color: #fff;
`

export default function Menu() {

    return (
        <Aside>
            <H1>Teste</H1>

            <nav>
                <ul>
                    <li><a href="#">teste</a></li>
                </ul>
            </nav>
        </Aside>
    )
}