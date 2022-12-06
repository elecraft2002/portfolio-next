import React, { useState, useRef } from "react";
import styled from "styled-components";
import Window from "../../src/components/window/Window";
import { COLORS } from "../../src/GlobalStyles";
import { IHome } from "./Homepage";

const StyledSTDOUT = styled.span``;
const StyledSTDUSER = styled.span`
  color: ${COLORS.green};
  display: inline-flex;
  align-items: center;
  width: 100%;
`;

const StyledCursor = styled.span`
  background-color: ${COLORS.white};
  width: 0.5rem;
  height: 1rem;
  animation: cursor 1s infinite steps(1);
  @keyframes cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
const StyledInput = styled.input`
  width: 100%;
  background: ${COLORS.black};
  border: none;
  outline: none;
`;
const StyledList = styled.ul`
  width: 100%;
`;
const FormWindow = () => {
  const [name, updateName] = useState<string>("");
  const nameInput = useRef(null);
  const handleNameUpdate = () => {
    updateName("");
  };
  return (
    <StyledList>
      <li>
        <StyledSTDOUT>Zadejte jméno a příjmení:</StyledSTDOUT>
        <br />
        <StyledSTDUSER>
          user@webdesign: ~$
          <StyledCursor />
          <StyledInput
            ref={nameInput}
            type="text"
            placeholder="Vojtík.."
            onKeyDown={handleNameUpdate}
          />
        </StyledSTDUSER>

        <br />
      </li>
    </StyledList>
  );
};

const StyledFormContainer = styled.section`
  background: ${COLORS.blue};
  background: linear-gradient(90deg, ${COLORS.blue} 0%, ${COLORS.black} 100%);
  clip-path: polygon(
    0 4em,
    35% 4em,
    35% 2em,
    66% 2em,
    66% 0,
    100% 0,
    100% 100%,
    0 100%
  );
  margin-top: -4rem;
  min-height: 50vh;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 20vw 20vw;
    background-image: linear-gradient(
        to right,
        ${COLORS.white} 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, ${COLORS.white} 1px, transparent 1px);
  }
`;
const StyledContent = styled.div`
  padding-top: 4rem;
`;
export default function Form(props: IHome) {
  return (
    <StyledFormContainer>
      <StyledContent>
        <h2>Form</h2>
        <Window
          height="100%"
          width="100%"
          backgroundColor={COLORS.black}
          borderColor={COLORS.white}
          name="KONTAKT"
        >
          <FormWindow />
        </Window>
      </StyledContent>
    </StyledFormContainer>
  );
}
