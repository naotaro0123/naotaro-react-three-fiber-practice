import React, { useState, useEffect, useContext, useRef } from 'react';
import CANNON from 'cannon';
import { Object3D, Vector3, Quaternion } from 'three';
import { useRender } from 'react-three-fiber';

const context = React.createContext<CANNON.World>(new CANNON.World());

export function Provider({ children }: any) {
  const [world] = useState(() => new CANNON.World());
  useEffect(() => {
    world.broadphase = new CANNON.NaiveBroadphase()
    world.solver.iterations = 10;
    world.gravity.set(0, 0, -25);
  }, [world]);

  useRender(() => world.step(1 / 60), false);
  return <context.Provider value={world} children={children} />
}

export function useCannon({...props}: { mass: number; }, fn: { (body: CANNON.Body): void; (body: CANNON.Body): void; (arg0: CANNON.Body): void; }, deps = []) {
  const ref = useRef<Object3D>();
  const world = useContext(context);
  const [body] = useState(() => new CANNON.Body(props));
  useEffect(() => {
    fn(body);
    world.addBody(body);
    return () => world.remove(body);
  }, [body, fn, world]);

  useRender(() => {
    if (ref.current) {
      const position = new Vector3(body.position.x, body.position.y, body.position.z);
      const quaternion = new Quaternion(body.quaternion.x, body.quaternion.y, body.quaternion.z);
      ref.current.position.copy(position);
      ref.current.quaternion.copy(quaternion);
    }
  }, false);
  return ref;
}

