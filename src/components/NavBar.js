// NavBar.js
import styled from "styled-components";
import React from "react";

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: nowrap;
  padding-bottom: 1.5rem;
`;

const HoverIcon = styled.img`
  position: absolute;
  bottom: 125%;
  width: 25px;
  display: none;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  &:hover ${HoverIcon} {
    display: block;
  }

  @media (max-width: 1000px) {
    &:hover ${HoverIcon} {
      display: none;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  flex: 1 1 auto;
  min-width: 0;
`;

const Button = styled.button`
  display: flex;
  padding: 0.7rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  flex-shrink: 0;

  font-family: "Outfit", sans-serif;
  font-weight: ${(props) => (props.primary ? "600" : "400")};
  color: ${(props) => (props.primary ? "#FFFFFF" : "#214ECF")};
  background-color: ${(props) => (props.primary ? "#214ECF" : "#FFFFFF")};
`;

const InsideIcon = styled.img`
  width: 80px;
  margin-right: 10px;
  margin-left: 10px;
  flex-shrink: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const OutsideIcon = styled.img`
  width: 75px;
  margin-top: 20px;
  flex-shrink: 0;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavBar = () => {

  const sections = [
    { id: "home", label: "Home", primary: true },
    { id: "section1", label: "Section 1" },
    { id: "section2", label: "Section 2" },
    { id: "section3", label: "Section 3" },
    { id: "section4", label: "Section 4" },
    // dynamic rendering, add whatever sections needed here
  ];
  
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
      <ButtonsContainer>
        {sections.map(({ id, label, primary }) => (
          <ButtonWrapper key={id}>
            {!primary && <HoverIcon src="/fball.svg" alt="football icon" />}
            <Button primary={primary} onClick={() => handleScroll(id)}>
              {label}
            </Button>
          </ButtonWrapper>
        ))}
      </ButtonsContainer>
      <InsideIcon src="/fball-player.svg" alt="football icon" />
      <OutsideIcon src="/fball-player.svg" alt="football icon" />
    </Wrapper>
  );
};

export default NavBar;
