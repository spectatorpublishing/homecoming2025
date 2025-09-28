// NavBar.js
import styled from "styled-components";
import React from "react";

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;

  color: ${(props) => (props.primary ? "white" : "#2563eb")};
  background-color: ${(props) => (props.primary ? "#2563eb" : "white")};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) =>
      props.primary ? "#1e40af" : "#f0f0f0"}; /* darker blue or light hover */
  }
`;

const NavBar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <Button primary onClick={() => handleScroll("home")}>
        Home
      </Button>
      <Button onClick={() => handleScroll("section1")}>Section</Button>
      <Button onClick={() => handleScroll("section2")}>Section</Button>
      <Button onClick={() => handleScroll("section3")}>Section</Button>
      <Button onClick={() => handleScroll("section4")}>Section</Button>
    </Wrapper>
  );
};

export default NavBar;
