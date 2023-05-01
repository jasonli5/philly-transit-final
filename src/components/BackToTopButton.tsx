import styled from "@emotion/styled";
import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const StyledButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--blue-color);
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackToTopButton = () => {
  function onClick() {
    window.scrollTo(0, 0);
  }

  return (
    <StyledButton onClick={onClick} title="Go up!">
      <ArrowCircleUpIcon />
    </StyledButton>
  );
};

export default BackToTopButton;
