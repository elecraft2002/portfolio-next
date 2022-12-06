import React, { useEffect, useState,useRef } from "react";
import { Vector2 } from "three";
interface Pos {
  x: number;
  y: number;
}
export default function useMousePos(ref: React.MutableRefObject<HTMLElement>) {
  const [mouseCords, updateMouseCords] = useState<Pos>({ x: 0, y: 0 });
  const handleMouseMove = (mouse: MouseEvent) => {
    updateMouseCords({ x: mouse.clientX, y: mouse.clientY });
  };
  useEffect(() => {
    ref.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return mouseCords;
}
