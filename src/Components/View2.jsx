import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { PlaneGeometry, MeshStandardMaterial } from "three";
// import { Comp } from "./Comp";

const ComputerModel = () => {
  const { scene } = useGLTF("/untitled1.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return <primitive object={scene} scale={0.5} />;
};

const SceneBackground = () => {
  return (
    <>
      <Environment preset="sunset" background />
      <hemisphereLight intensity={0.35} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

const View2 = () => {
  return (
    <div className="h-screen">
      <Canvas shadows camera={{ position: [10, 10, 30], fov: 75 }}>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <SceneBackground />
        <ComputerModel />

        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1, 0]}
        >
          <planeGeometry args={[40, 40]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        {/* <Comp /> */}
      </Canvas>
    </div>
  );
};

export default View2;
