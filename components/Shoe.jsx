import React from 'react'
import '../styles/Home.module.css'
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { IoMdRefresh } from 'react-icons/io'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={props.customColors.setStripes}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={props.customColors.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={props.customColors.soul}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={props.customColors.stripes}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={props.customColors.soul}
      />
    </group>
  )
}

function Shoe() {
  const [mesh, setMesh] = useState(
    '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
  )
  const [stripes, setStripes] = useState(
    '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
  )
  const [soul, setSoul] = useState(
    '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')
  )

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card w-1/2 relative">
          <h2 className="mb-5 text-4xl drop-shadow-xl text-center">Customize your Shoes</h2>
          <div className="absolute top-0 right-0 flex items-center flex-col">
            <button
              className='bg-gray-500 p-4 rounded-full'
              onClick={() => {
                setMesh('#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'))
                setStripes('#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'))
                setSoul('#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'))
              }}
            >
              <IoMdRefresh className="text-xl cursor-pointer" />
            </button>
            
            <span className="text-gray-500 text-sm">Click to Generate Random Colors</span>
          </div>
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <spotLight
                  intensity={0.9}
                  angle={0.1}
                  penumbra={1}
                  position={[10, 15, 10]}
                  castShadow
                />
                <Model customColors={{ mesh: mesh, stripes: stripes, soul: soul }} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              </Suspense>
            </Canvas>
          </div>
          <div className="flex justify-evenly [&>div]:flex [&>div]:flex-col [&>div>input]:w-20 [&>div>input]:h-14 [&>div>input]:bg-transparent  [&>div]:items-center">
            <div>
              <input
                type="color"
                id="mesh"
                name="mesh"
                value={mesh}
                onChange={(e) => setMesh(e.target.value)}
                className="bg-transparent"
              />
              <label for="mesh">Primary</label>
            </div>
            <div>
              <input
                type="color"
                id="stripes"
                name="stripes"
                value={stripes}
                onChange={(e) => setStripes(e.target.value)}
              />
              <label for="stripes">Secondary</label>
            </div>
            <div>
              <input
                type="color"
                id="soul"
                name="soul"
                value={soul}
                onChange={(e) => setSoul(e.target.value)}
              />
              <label for="soul">Sole</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shoe
