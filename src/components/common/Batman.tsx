import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';

interface BatmanProps {

}

const Model: React.FC = () => {
  const group = useRef();
  const glf = useGLTF("/assets/files/batman/scene.gltf");
  const { actions } = useAnimations(glf.animations, group);

  useEffect(() => {
      if (actions.IDLE001) { // Change this to the animation you want to play
          console.log("Playing IDLE001 animation");
          actions.IDLE001.play();
      } else {
          console.log("IDLE001 animation not found");
      }
  }, [actions]); // Add actions as a dependency

  return (
      <Suspense fallback={null}>
          <primitive 
              ref={group} 
              object={glf.scene}
              position={[0, 0, 0]}
          />
      </Suspense>
  );
};


const Batman: React.FC<BatmanProps> = () => {
    return (
      <div className="batman">
        <Canvas>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          <Model />
          <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={40} />
          <OrbitControls />
        </Canvas>
    </div>
    );
};

export default Batman;
