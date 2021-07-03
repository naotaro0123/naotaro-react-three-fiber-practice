import { useRef, useState } from 'react';
import { Mesh } from 'three';
import { useSpring, animated, config } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';

export const HelloSpring = () => {
  const mesh = useRef<Mesh>();
  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? 3.5 : 3,
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 2;
    }
  });
  return (
    <animated.mesh
      scale={scale}
      onClick={() => setActive(!active)}
      ref={mesh}
    >
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  )
}
