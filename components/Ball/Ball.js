import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { Preload } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { Decal } from '@react-three/drei';
import { Loader } from './Loader';

const Ball = (props) => {

    const { icon } = props;

    const [decal] = useTexture([icon]);

    return (
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial
                    color="#f4f4f5"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

export const BallCanvas = (props) => {
    const { icon } = props;
    return (
        <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false} position0={0} />
                <Ball icon={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

