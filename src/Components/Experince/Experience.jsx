import { OrbitControls,PerspectiveCamera,MeshReflectorMaterial,Stage } from "@react-three/drei";
import { Suspense,useRef,useEffect,useState } from 'react'
// import Honda from '../Honda/Honda';
import Bike from '../Honda/Bike';


const Experince = () =>{
  const test = useRef()
    useEffect(()=>{
      console.log(test.current)
    },[])
    return (
        <>
            {/* Camera */}
          <PerspectiveCamera makeDefault fov={45} position={[0, .75, 4]} ref={test}/>
          <ambientLight color={'#ffffff'} intensity={.46}/>
          <directionalLight color={'#ffffff'} position={[10, 0, 15]} intensity={.25}/>
          <directionalLight color={'#ffffff'} position={[0, 10, -5]} intensity={.5}/>
          {/* <Stage intensity={0} castShadow={false}>
          </Stage> */}
            <Suspense fallback={null}>
              {/* <Honda /> */}
              <Bike/>
            </Suspense>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#6b6b6b"
            metalness={0.5}
          />
          </mesh>
          <OrbitControls 
            target={[0,1,0]}
            minDistance={1}
            // minDistance={0.15}
            maxDistance={12}
            maxPolarAngle={Math.PI/2}
          />
        </>
    )
}
export default Experince;