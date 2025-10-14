// NavBar.js
import styled from "styled-components";
import React from "react";

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;

  font-family: 'Outfit', sans-serif;
  font-weight: ${(props) => (props.primary ? "600" : "400")};
  color: ${(props) => (props.primary ? "#FFFFFF" : "#214ECF")};
  background-color: ${(props) => (props.primary ? "#214ECF" : "#FFFFFF")};
`;

const InsideIcon = styled.img`
  width: 80px;
`;

const OutsideIcon = styled.img`
  width: 75px;
  margin-top: 20px;
`;

const ButtonIcon = styled.img`
  position: absolute;
  bottom: 125%;
  width: 25px;
  display: none;

  ${ButtonWrapper}:hover & {
    display: block;
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
      <OutsideIcon src="/fball-player.svg" alt="football icon" />
      <InsideIcon src="/fball-player.svg" alt="football icon" />
      <ButtonWrapper>
        <Button primary onClick={() => handleScroll("home")}>
          Home
        </Button>
      </ButtonWrapper>

      <ButtonWrapper>
        <ButtonIcon src="/fball.svg" alt="football icon" />
        <Button onClick={() => handleScroll("section1")}>
          Section
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonIcon src="/fball.svg" alt="football icon" />
        <Button onClick={() => handleScroll("section2")}>
          Section
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonIcon src="/fball.svg" alt="football icon" />
        <Button onClick={() => handleScroll("section3")}>
          Section
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <ButtonIcon src="/fball.svg" alt="football icon" />
        <Button onClick={() => handleScroll("section4")}>
          Section
        </Button>
      </ButtonWrapper>
      <InsideIcon src="/fball-player.svg" alt="football icon" />
      <OutsideIcon src="/fball-player.svg" alt="football icon" />
    </Wrapper>
  );
};

export default NavBar;
