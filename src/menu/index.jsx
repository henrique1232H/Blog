import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const H1 = styled.h1`
  color: #fff;
  transition: 200ms all ease-in-out;

  :hover {
    letter-spacing: 0.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
`;

const A = styled.a`
  color: #fff;
  text-decoration: none;

  :hover {
    color: #fff;
  }
`;

const Nav = styled.nav``;

const Input = styled.input`
  padding: 1rem 2rem;
  border-radius: 10px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  outline: none;
  transition: 200ms all ease-in-out;

  ::placeholder {
    color: #fff;
  }

  :focus {
    outline: 2px outset #f21919;
  }
`;

export default function Menu() {
  return (
    <Aside>
      <H1>Musica+</H1>

      <Input type="text" name="text" id="" placeholder="Pesquise algo..." />

      <Nav>
        <Ul>
          <li>
            <A href="">Mais</A>
          </li>

          <li>
            <A href="">Sobre</A>
          </li>
        </Ul>
      </Nav>
    </Aside>
  );
}
