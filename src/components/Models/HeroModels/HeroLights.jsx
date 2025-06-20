import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
        {/* lamp's light */}
        <spotLight
            position={[2, 3, -1 ]}
            angle = {0.18}
            intensity={99}
            penumbra={0.3}
            color="white"
        />

        {/* bluish overhead lamp */}
        <spotLight
            position={[4, 5, 4]}
            angle = {0.3}
            intensity={40}
            penumbra={0.5}
            color="4cc9f0"
        />

        {/* purplish side fill */}
        <spotLight
            position={[-3, 5, 5]}
            angle = {0.4}
            intensity={60}
            penumbra={1}
            color="9d4edd"
        />

        {/* area light for soft moody fill */}
        <primitive
            object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
            position={[1, 3, 4]} 
            intensity={15}
            rotation={[-Math.PI/4, Math.PI/4, 0]}
        />

        {/* subtle point light for atmospheric tone */}
        <pointLight
            position={[0, 1, 0]}
            intensity={10}
            color='#7209b7'
        />
        <pointLight
            position={[1, 2, -2]}
            intensity={10}
            color='#0d00a4'
        />


        {/* <primitive 
            object={new THREE.ReactAreaLight('#A259FF')}
        /> */}
    </>
  )
}

export default HeroLights