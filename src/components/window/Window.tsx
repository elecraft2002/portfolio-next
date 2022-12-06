import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import Cross from "../../assets/svgs/Cross";
import { COLORS } from "../../GlobalStyles";
interface IWindow {
  width: string;
  height: string;
  children?: any;
  backgroundColor?: string;
  borderColor?: string;
  name?: string;
}

interface IWindowOriginalPosition {
  width: string;
  height: string;
}

const OriginalPosotion = styled.div<IWindowOriginalPosition>`
  position: relative;
  width: ${(props) => {
    return props.width;
  }};
  height: ${(props) => {
    return props.height;
  }};
`;

interface IWindowColors {
  backgroundColor?: string;
  borderColor?: string;
}

const WindowContainer = styled.div<IWindow & { visible: boolean }>`
  position: relative;
  background: ${(props) => {
    return props.backgroundColor;
  }};
  width: ${(props) => props.width};
  height: ${(props) => {
    return props.visible ? props.height : 0;
  }};
  display: grid;
  grid-template-columns: 1fr 2em;
  grid-template-rows: 2em 1fr;
  border: ${(props) => (props.visible ? "solid" : "none")} 1px
    ${(props) => props.borderColor};
  overflow: hidden;
  transition: height 0.5s;
  box-shadow: 7px 7px ${COLORS.purple};
  color: ${(props) => props.borderColor};
`;
const WindowSection = styled.div<IWindowColors>`
  border: solid 1px ${(props) => props.borderColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface IPosition {
  x: number;
  y: number;
}

export default function Window(props: IWindow) {
  const [isOpened, setOpenState] = useState<boolean>(true);
  // const [dimensions, setDimensions] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>(null);
  // const handleResize = () => {
  //   setDimensions([
  //     ref.current?.offsetHeight - 32,
  //     ref.current?.offsetWidth - 32,
  //   ]);
  //   console.log("ref.current.innerHTML");
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <OriginalPosotion ref={ref} height={props.height} width={props.width}>
      <Draggable handle=".handler">
        <WindowContainer
          height={props.height}
          width={props.width}
          borderColor={props.borderColor}
          backgroundColor={props.backgroundColor}
          visible={isOpened}
        >
          <WindowSection
            className="handler"
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
          >
            {props.name}
          </WindowSection>
          <WindowSection
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
            onClick={() => setOpenState(false)}
          >
            <Cross fill={props.borderColor} />
          </WindowSection>
          <WindowSection
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
          >
            {props.children}
          </WindowSection>
          <WindowSection
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
          ></WindowSection>
        </WindowContainer>
      </Draggable>
    </OriginalPosotion>
  );
}
