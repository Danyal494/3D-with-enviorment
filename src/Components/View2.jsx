import { OrbitControls, Environment, useGLTF, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
// import { Comp } from "./Comp";

// Component to load a 3D model
const ComputerModel = () => {
  const { scene } = useGLTF("/untitled1.glb");
  return <primitive object={scene} scale={0.5} />;
};

// Component for the scene background and elements
const SceneBackground = () => {
  return (
    <>
      {/* Skybox environment */}
      <Environment preset="night" background />
      <hemisphereLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </>
  );
};

const View2 = () => {
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [10, 10, 30], fov: 75 }}>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <SceneBackground />
        <ComputerModel />
        {/* <Comp /> */}
      </Canvas>
    </div>
  );
};

export default View2;
