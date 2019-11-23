import React from 'react';
import './App.css';
import { Canvas } from 'react-three-fiber';
// import HelloWorld from './HelloWorld';
import HelloWorld2 from './HelloWorld2';

const App: React.FC = () => {
  return (
    <div className="App">
      <Canvas style={{ width: '500px', height: '500px' }}>
        <HelloWorld2 />
      </Canvas>
    </div>
  );
}

export default App;
