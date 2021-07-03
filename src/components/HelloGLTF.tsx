import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const HelloGLTF = () => {
  const gltf = useLoader(GLTFLoader, './monkey.gltf');
  return (
    <primitive object={gltf.scene} scale={2} />
  )
};
