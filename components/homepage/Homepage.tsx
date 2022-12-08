import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import styled from "styled-components";
import Button from "../../src/components/Button";
import Window from "../../src/components/window/Window";
import { COLORS } from "../../src/GlobalStyles";
import Facts from "./Facts";
import Form from "./Form";
import Info from "./Info";
import Landing from "./Landing";
import Projects from "./Projects";

const Popup = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 2;
`;
export interface IHome {
  homepage: any;
  settings?: any;
  projects?: any;
}
export default function Home(props: IHome) {
  return (
    <>
      <ParallaxProvider>
        <Landing homepage={props.homepage} />
        <Info homepage={props.homepage} />
        <Projects projects={props.projects}/>
        <Facts homepage={props.homepage} settings={props.settings} />
        <Form homepage={props.homepage} />
      </ParallaxProvider>
      <Popup>
        <Window
          name="KONTAKTOVAT"
          width={"200px"}
          height={"100px"}
          backgroundColor={COLORS.blue}
          borderColor={COLORS.white}
        >
          <Button colorType="gradientPink">ANO</Button>
          <Button colorType="gradientPink">NE</Button>
        </Window>
      </Popup>
    </>
  );
}
