import { useSpring, config } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Iphone } from "../../src/assets/models/Iphone";
import { transformBetween } from "../../src/functions/values";
import scroll from "../../src/functions/Scroll";
import { animated } from "@react-spring/three";
import useMousePos from "../../src/functions/mouse";
import styled from "styled-components";
import { COLORS, SIZE } from "../../src/GlobalStyles";
import { useInView } from "react-intersection-observer";
import Button from "../../src/components/Button";
import ProjectBlock from "./ProjectBlock";
import MobileProjectBlock from "./MobileProjectBlock";

const StyledSection = styled.section`
  min-height: 200vh;
  margin-top: -150vh;
`;

const StyledMobileContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
`;

interface IProjects {
  projects: any;
}
interface IMobileContainer {
  index: number;
}

const StyledProjectLi = styled.li<IMobileContainer>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: ${SIZE.laptopL};
  min-height: 80vh;
  position: relative;
  grid-template-areas: ${(props) => {
    return props.index % 2 ? '". project"' : '"project ."';
  }};
  margin: auto;
  /* &:first-of-type:before {
    content: "";
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 200%;
    left: 0;
    top: -200%;
    background-size: 20vw 20vw;
    background-image: linear-gradient(
        to right,
        ${COLORS.black} 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, ${COLORS.black} 1px, transparent 1px);
      z-index:-1;
  }
  &:after {
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
        ${COLORS.black} 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, ${COLORS.black} 1px, transparent 1px);
      z-index:-1;
  }
  &:last-of-type:after {
    content: "";
    position: absolute;
    opacity: 0.2;
    width: 100%;
    height: 150%;
    left: 0;
    top: 0;
    background-size: 20vw 20vw;
    background-image: linear-gradient(
        to right,
        ${COLORS.black} 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, ${COLORS.black} 1px, transparent 1px);
      z-index:-1;
  } */
`;

const DesktopProjects = (props: IProjects) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: canvasRef, inView } = useInView({
    threshold: 0,
  });
  const [sections, setSections] = useState([]);
  const list = useRef<HTMLUListElement>(null);
  useEffect(() => {
    setSections(() => {
      return [...list.current.children].map((el: HTMLElement) => {
        return (
          el.offsetTop - sectionRef.current?.offsetTop - window.innerHeight
        );
      });
    });
  }, [window.innerWidth]);
  // console.log(sections);
  const mousePosition = useMousePos(sectionRef);
  const frame: number =
    scroll() - sectionRef.current?.offsetTop; /*  + window.innerHeight */
  // const frame = 0;
  // console.log(frame);
  const [fitScale, setFitScale] = useState(1);
  useEffect(() => {
    setFitScale(() => {
      const size1 = window.innerWidth / 650 + 100 / window.innerWidth;
      const size2 = window.innerHeight / 650 + 100 / window.innerHeight;
      // console.log(size1, size2);
      return size1 < size2 ? size2 : size1;
    });
    setScaleFinal(() => {
      const size1 =  window.innerHeight / 2500;
      const size2 =  window.innerWidth / 2000;
      // console.log(size1, size2);
      return size1 > size2 ? size2 : size1;
    });
  }, [window.innerWidth]);

  const [keyframeN, setKeyframeN] = useState(0);
  const [section, setSection] = useState(0);
  const [scale, setScale] = useState(0);
  const [scaleFinal, setScaleFinal] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const endingPosition = 1;
  const endingRotationY = -0.3;
  const endingRotationZ = 0.1;
  useEffect(() => {
    setKeyframeN(() => {
      let n = sections.findIndex(
        (e: any) => e >= frame - window.innerHeight / 4 + 100
      );
      if (n === 0) return 0;
      if (n === -1) {
        n = sections.length;
      }
      return (n % 2) + 1;
    });
    setSection(() => {
      let n = sections.findIndex(
        (e: any) => e >= frame - window.innerHeight / 4 + 100
      );
      if (n === 0) return 0;
      if (n === -1) {
        n = sections.length;
      }
      return n - 1;
    });
    if (keyframeN != 0) return;
    setScale(
      transformBetween(
        [window.innerHeight / 4, window.innerHeight / 3],
        [fitScale, scaleFinal],
        frame
      )
    );
    setPositionX(
      transformBetween(
        [window.innerHeight / 4, window.innerHeight / 3],
        [0, endingPosition],
        frame
      )
    );
    setRotationY(
      transformBetween(
        [window.innerHeight / 4, window.innerHeight / 3],
        [0, endingRotationY],
        frame
      )
    );
    setRotationZ(
      transformBetween(
        [window.innerHeight / 4, window.innerHeight / 3],
        [0, -endingRotationZ],
        frame
      )
    );
    setShadowOpacity(
      transformBetween(
        [window.innerHeight - window.innerHeight / 4, 20],
        [0, 0.2],
        frame
      )
    );
  }, [frame]);
  const keyframes = {
    position: [
      [positionX, 0, 0],
      [-endingPosition, 0, 0],
      [endingPosition, 0, 0],
    ],
    rotation: [
      [
        -(mousePosition.y - window.innerHeight / 2) / 10000,
        rotationY /* + (mousePosition.x - window.innerWidth / 2) / 10000 */,
        rotationZ /* - (mousePosition.y - window.innerHeight / 2) / 10000 */,
      ],
      [
        -(mousePosition.y - window.innerHeight / 2) / 10000,
        -endingRotationY - (mousePosition.x - window.innerWidth / 2) / 10000,
        endingRotationZ + (mousePosition.y - window.innerHeight / 2) / 10000,
      ],
      [
        -(mousePosition.y - window.innerHeight / 2) / 10000,
        endingRotationY - (mousePosition.x - window.innerWidth / 2) / 10000,
        -endingRotationZ + (mousePosition.y - window.innerHeight / 2) / 10000,
      ],
    ],
    scale: [scale, scaleFinal, scaleFinal],
  };

  const { positionEased, rotationEased, scaleEased, colorEased } = useSpring({
    positionEased: keyframes.position[keyframeN],
    rotationEased: keyframes.rotation[keyframeN],
    scaleEased: keyframes.scale[keyframeN],
    colorEased: frame > window.innerHeight / 3 ? "white" : COLORS.black,
    config: config.stiff,
  });
  // console.log(keyframes.position[keyframeN], keyframeN, [rotationY, rotationZ]);
  return (
    <StyledSection ref={sectionRef}>
      <StyledMobileContainer>
        <Canvas
          ref={canvasRef}
          shadows
          dpr={[1, 2]}
          camera={{ fov: 50 }}
          style={{ opacity: opacity }}
        >
          <Suspense fallback={null}>
            <ambientLight color={"white"} intensity={1} />
            <animated.mesh
              rotation={rotationEased as any}
              scale={scaleEased as any}
              position={positionEased as any}
            >
              <mesh scale={9}>
                {inView && (
                  <Iphone
                    image={
                      props.projects.results[section]?.data.cover_photo.Mobile
                        .url || "https://www.mall.cz/i/34831790"
                    }
                    color={colorEased}
                  />
                )}
              </mesh>
            </animated.mesh>
          </Suspense>
        </Canvas>
      </StyledMobileContainer>
      <div style={{ height: "50vh" }}></div>
      <ul ref={list}>
        {props.projects.results.map((project: any, i: number) => {
          return (
            <StyledProjectLi index={i} key={i}>
              <ProjectBlock project={project} />
            </StyledProjectLi>
          );
        })}
      </ul>
    </StyledSection>
  );
};

const StyledMobileUl = styled.ul`
  padding: 1rem;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    opacity: 0.05;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: 20vw 20vw;
    z-index: -1;
    background-image: linear-gradient(
        to right,
        ${COLORS.black} 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, ${COLORS.black} 1px, transparent 1px);
  }
`;

const StyledProjectsContainer = styled.div``;

const MobileProjects = (props: IProjects) => {
  return (
    <StyledMobileUl>
      {props.projects.results.map((project: any, i: number) => {
        return <MobileProjectBlock project={project} key={i} index={i} />;
      })}
    </StyledMobileUl>
  );
};
export default function Projects(props: IProjects) {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const handleScreenResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    handleScreenResize();
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);
  return (
    <StyledProjectsContainer>
      {screenWidth > parseInt(SIZE.tablet) ? (
        <DesktopProjects projects={props.projects} />
      ) : (
        <MobileProjects projects={props.projects} />
      )}
    </StyledProjectsContainer>
  );
}
