import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Comp } from "./Comp";

const View = () => {
  return (
    <div className="h-screen ">
      <Canvas camera={{ position: [10, 10, 30], fov: 120 }}>
        <OrbitControls />
        <ambientLight intensity={2} />
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <Comp />
      </Canvas>
    </div>
  );
};

export default View;
