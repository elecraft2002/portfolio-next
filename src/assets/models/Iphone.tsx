import { animated, SpringValue } from "@react-spring/three";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Body_Bezel_0: THREE.Mesh;
    Body_Camera_Glass_0: THREE.Mesh;
    Body_Material_0: THREE.Mesh;
    Body_Wallpaper_0: THREE.Mesh;
    Body_Lens_0: THREE.Mesh;
    Body_Mic_0: THREE.Mesh;
    Body001_Screen_Glass_0: THREE.Mesh;
    Button_Frame_0: THREE.Mesh;
    Circle003_Frame_0: THREE.Mesh;
    Frame_Antenna_0: THREE.Mesh;
    Frame_Frame2_0: THREE.Mesh;
    Frame_Frame_0: THREE.Mesh;
    Frame_Port_0: THREE.Mesh;
    Frame_Mic_0: THREE.Mesh;
  };
  materials: {
    Bezel: THREE.MeshStandardMaterial;
    Camera_Glass: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    Wallpaper: THREE.MeshStandardMaterial;
    Lens: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Screen_Glass: THREE.MeshStandardMaterial;
    Frame: THREE.MeshStandardMaterial;
    Antenna: THREE.MeshStandardMaterial;
    Frame2: THREE.MeshStandardMaterial;
    Port: THREE.MeshStandardMaterial;
  };
};
export interface IRotation {
  x: number;
  y: number;
  z: number;
}
export interface Image {
  dimensions: Dimensions;
  alt:        string;
  copyright:  string;
  url:        string;
}

export interface Dimensions {
  width:  number;
  height: number;
}

export interface IIphone {
  rotation?: IRotation;
  image: string;
  color?: SpringValue<string> | string;
}

export function Iphone(props: IIphone) {
  const colorMap = useLoader(TextureLoader, props?.image);
  useEffect(() => {
    const imgRatio =
      colorMap.image.width / colorMap.image.height;
    const planeRatio = 9 / 19.5;
    colorMap.wrapS = THREE.RepeatWrapping; // THREE.ClampToEdgeWrapping;
    colorMap.repeat.x = planeRatio / imgRatio;
    colorMap.offset.x = -0.5 * (planeRatio / imgRatio - 1);
  }, [props.image]);
  const { nodes, materials } = useGLTF("/iphone13_1.gltf") as any;
  return (
    <group dispose={null}>
      <group name="Sketchfab_model">
        <group name="iPhone13ProMaxfbx" rotation={[0, Math.PI, 0]}>
          <group name="RootNode">
            <group name="Frame">
              <group name="Body">
                <mesh
                  name="Body_Bezel_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body_Bezel_0.geometry}
                  material={materials.Bezel}
                />
                <mesh
                  name="Body_Camera_Glass_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body_Camera_Glass_0.geometry}
                  material={materials.Camera_Glass}
                />
                <mesh
                  name="Body_Material_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body_Material_0.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Body_Wallpaper_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body_Wallpaper_0.geometry}
                  material={materials.Wallpaper}
                >
                  <animated.meshStandardMaterial
                    map={colorMap}
                    color={props?.color}
                    side={THREE.DoubleSide}
                  />
                </mesh>
                <mesh
                  name="Body_Lens_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body_Lens_0.geometry}
                  material={materials.Lens}
                />
                <mesh
                  name="Body_Mic_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body_Mic_0.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Body001">
                <mesh
                  name="Body001_Screen_Glass_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body001_Screen_Glass_0.geometry}
                  material={materials.Screen_Glass}
                />
              </group>
              <group name="Button">
                <mesh
                  name="Button_Frame_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Button_Frame_0.geometry}
                  material={materials.Frame}
                />
              </group>
              <group name="Circle003">
                <mesh
                  name="Circle003_Frame_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Circle003_Frame_0.geometry}
                  material={materials.Frame}
                />
              </group>
              <mesh
                name="Frame_Antenna_0"
                castShadow
                receiveShadow
                geometry={nodes.Frame_Antenna_0.geometry}
                material={materials.Antenna}
              />
              <mesh
                name="Frame_Frame2_0"
                castShadow
                receiveShadow
                geometry={nodes.Frame_Frame2_0.geometry}
                material={materials.Frame2}
              />
              <mesh
                name="Frame_Frame_0"
                castShadow
                receiveShadow
                geometry={nodes.Frame_Frame_0.geometry}
                material={materials.Frame}
              />
              <mesh
                name="Frame_Port_0"
                castShadow
                receiveShadow
                geometry={nodes.Frame_Port_0.geometry}
                material={materials.Port}
              />
              <mesh
                name="Frame_Mic_0"
                castShadow
                receiveShadow
                geometry={nodes.Frame_Mic_0.geometry}
                material={materials.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/iphone13_1.gltf");
