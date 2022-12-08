import { Canvas, Vector3 } from "@react-three/fiber";
import React, { Suspense, useRef, useState, useEffect } from "react";
import styled, { StyledComponent } from "styled-components";
import Button from "../../src/components/Button";
import { COLORS, DEVICE, NAV_HEIGHT, SIZE } from "../../src/GlobalStyles";
import { IIphone, Iphone, IRotation } from "../../src/assets/models/Iphone";
import { useSpring, config, animated } from "@react-spring/three";
import wallpaper from "../../src/assets/imgs/Iphone_screen.jpg";
import { IHome } from "./Homepage";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

const CanvasBackgroundContainer = styled.div`
  width: 100%;
  height: calc(100% - ${NAV_HEIGHT});
  top: ${NAV_HEIGHT};
  position: absolute;
`;
const Viewer = (props: IIphone) => {
  const { rotation } = useSpring({
    rotation: [props.rotation?.x, props.rotation?.y, props.rotation?.z],
    config: config.wobbly,
  });
  const originalRotation: IRotation = { x: -1, y: 0, z: 0.5 };
  const ligth1Position: Vector3 = [0, 10, 30];
  const ligth2Position: Vector3 = [0, 5, -10];
  const [position, updatePosition] = useState<Vector3>([0, 0.5, 0]);
  const handleResize = () => {
    updatePosition([window.innerWidth / 800, 0.5, 0]);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} ref={ref}>
      <Suspense fallback={null}>
        {/* <Stage
          // controls={ref}
          preset="rembrandt"
          intensity={1}
          environment="city"
        > */}
        <mesh
          rotation={[
            originalRotation.x,
            originalRotation.y,
            originalRotation.z,
          ]}
          scale={4}
          position={position}
        >
          <directionalLight
            intensity={2}
            color={"red"}
            position={ligth1Position}
          />
          <ambientLight color={"white"} intensity={1} />
          <pointLight />
          <pointLight
            intensity={10}
            color={"white"}
            position={ligth2Position}
          />
          <animated.mesh rotation={rotation as any}>
            {inView && <Iphone image={props.image} />}
          </animated.mesh>
        </mesh>
        {/* </Stage> */}
      </Suspense>
      {/* <OrbitControls ref={ref} autoRotate /> */}
    </Canvas>
  );
};

interface Controlls {
  mouseEvent: any;
}
const CanvasBackground = (props: Controlls) => {
  const [rotation, updateRotation] = useState<IRotation>({ x: 0, y: 0, z: 0 });
  const senzitivity = 10;
  const handleMouseMove = (mouse: MouseEvent) => {
    const percentageX = mouse.clientX / window.innerWidth;
    const percentageY = mouse.clientY / window.innerHeight;
    updateRotation({
      x: (percentageY - 0.5) / senzitivity,
      y: (percentageX - 0.5) / senzitivity,
      z: 0,
    });
  };
  useEffect(() => {
    props.mouseEvent.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      props.mouseEvent.current?.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <CanvasBackgroundContainer>
      <Viewer image={wallpaper.src} rotation={rotation} />
    </CanvasBackgroundContainer>
  );
};
const LandingContainer = styled.div`
  position: relative;
  background: ${COLORS.red};
  background: linear-gradient(
    60deg,
    ${COLORS.red} -33%,
    ${COLORS.purple} 0%,
    ${COLORS.red} 100%
  );
  width: 100%;
  min-height: 120vh;
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

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 800;
  margin: 1rem 0;
  @media ${DEVICE.laptop} {
    font-size: 7em;
  }
`;
const SubTitle = styled.p`
  font-size: 2.9rem;
  margin: 1rem 0;
  font-weight: 300;
  @media ${DEVICE.laptop} {
    font-size: 3rem;
    letter-spacing: 16px;
  }
`;
const Description = styled.span`
  font-weight: 400;
  font-size: 1.5rem;
`;
const ContentContainer = styled.div`
  color: ${COLORS.white};
  width: calc(100% - 2rem);
  height: 100vh;
  margin: 0 1rem;
  position: absolute;
`;

const ContentWidth = styled.div`
  max-width: ${SIZE.laptopL};
  margin: auto;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function LandingContent(props: IHome) {
  console.log(props.homepage);
  return (
    <ContentContainer>
      <ContentWidth>
        <div>
          <Parallax translateY={["10vh", "-10vh"]}>
            <span>
              <Title>{props.homepage.data.title}</Title>
              <SubTitle>{props.homepage.data.subtitle}</SubTitle>
            </span>
            <Button
              colorType="white"
              onClick={() => {
                console.log("Klik");
              }}
            >
              Objednat
            </Button>
            <Description>
              <PrismicRichText field={props.homepage.data.description} />
            </Description>
          </Parallax>
        </div>
      </ContentWidth>
    </ContentContainer>
  );
}
export default function Landing(props: IHome) {
  const Controlls = useRef<HTMLDivElement>(null);

  return (
    <LandingContainer>
      <CanvasBackground mouseEvent={Controlls} />
      <div ref={Controlls}>
        <LandingContent homepage={props.homepage} />
      </div>
    </LandingContainer>
  );
}
