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
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 2%;
`

const H1 = styled.h1`
    color: #fff;
`

const Ul = styled.ul`
    display: flex;
    gap: 3rem;
    list-style: none;
`

const A = styled.a`
    color: #fff;
    text-decoration: none;

    :hover{
        color: #fff
    }
    
`

export default function Menu() {

    return (
        <Aside>
            <H1>Blog</H1>

            <nav>
                <Ul>
                    <li><A href="#">teste</A></li>
                    <li><A href="#">A</A></li>
                </Ul>
            </nav>
        </Aside>
    )
}