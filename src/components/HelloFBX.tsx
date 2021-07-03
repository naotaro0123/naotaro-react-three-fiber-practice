import { useLoader } from '@react-three/fiber';
import { useFBX } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export const HelloFBXOne = () => {
  const fbx = useLoader(FBXLoader, './monkey.fbx');
  return <primitive object={fbx} scale={0.04} />
};

export const HelloFBXTwo = () => {
  const fbx = useFBX('./monkey.fbx');
  return <primitive object={fbx} scale={0.04} />
};
