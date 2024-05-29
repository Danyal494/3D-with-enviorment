import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Index = () => {
  //   const mesh = useRef(null);
  // useFrame{( state, delta)=>{
  //     mesh.current.rotation.x +=  delta* 0.1;
  //     mesh.current.rotation.x += delta* 0.1;
  //     mesh.current.rotation.x += delta* 0.1;
  // }}

  //   useFrame((state, delta) => {
  //     mesh.current.rotation.x += delta * 0.1;
  //     mesh.current.rotation.y += delta * 0.1;
  //     mesh.current.rotation.z += delta * 0.1;
  //   });
  return (
    <div className="h-screen">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={2} />
        <mesh>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </Canvas>
    </div>
  );
};
