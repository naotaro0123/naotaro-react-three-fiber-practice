import { a, useSpring } from '@react-spring/three';
import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
import { GroupProps, useGraph } from '@react-three/fiber';
import { useMemo, useState, useEffect } from 'react';
import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils';

type ExtendModel = { pose: number } & GroupProps;
export const Model = ({ pose, ...props }: ExtendModel) => {
  const { scene, animations } = useGLTF('./stacy.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone) as any;
  const texture = useTexture('./stacy.jpg');
  const { ref, actions, names } = useAnimations(animations);
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(pose);
  const { color } = useSpring({
    scale: hovered ? [1.15, 1.15, 1] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'aquamarine',
  });
  useEffect(() =>
    void (document.body.style.cursor = hovered ? 'pointer' : 'auto'),
    [hovered],
  );
  useEffect(() => {
    console.log(actions, names[index])
    actions[names[index]]?.reset().fadeIn(0.5).play();
    // actions[names[index]]?.fadeOut(0.5);
  }, [index, actions, names]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setIndex((index + 1) % names.length)}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      >
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          geometry={nodes.stacy.geometry}
          skeleton={nodes.stacy.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 100]}
        >
          <meshStandardMaterial
            map={texture}
            map-flipY={false}
          />
        </skinnedMesh>
      </group>
      <a.mesh
        receiveShadow
        position={[0, 1, -1]}
        scale={hovered ? [1.15, 1.15, 1] : [1, 1, 1]}
      >
        <circleBufferGeometry args={[0.6, 64]} />
        <a.meshStandardMaterial color={color} />
      </a.mesh>
    </group>
  );
};
