import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import { useState } from "react";


const Aside = styled.aside`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.9);
  width: 100%;

  @media (min-width:1000px) {
    position: relative;
    padding: 1rem 4rem;
    height: 10vh;
  }
`;

const H1 = styled.h1`
  color: #fff;
  padding-top: 0.5rem;
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
    outline: 4px outset #f21919;
  }
`;

export default function Menu() {

  const [teste, useTeste] = useState()


  return (
    <Aside>

      <GiHamburgerMenu color="#FFF" size={30} className="icon"/>
      <H1><A href="#">Musica+</A></H1>


      <FaSearch color="#FFF" size={30} className="icon"/>

    </Aside>
  );
}
