import React, { useRef, useEffect } from 'react'
import { useWorld } from 'hyperfy'
function MyThing() {
  const world = useWorld()
}

import { Tween } from './tween'
const anim = new Tween({ z: -8.5 })
  .to({ z: -20 }, 4, Tween.QUAD_IN_OUT)
  .to({ z: -8.5 }, 4, Tween.QUAD_IN_OUT)
  .loop()

  const anim2 = new Tween({ z: -20 })
  .to({ z: -8.5 }, 3, Tween.QUAD_IN_OUT)
  .wait(0.1)
  .to({ z: -20 }, 3, Tween.QUAD_IN_OUT)
  .loop()

  const anim3 = new Tween({ z: -8.5 })
  .to({ z: -20 }, 3.5, Tween.QUAD_IN_OUT)
  .to({ z: -8.5 }, 3.5, Tween.QUAD_IN_OUT)
  .loop()

  const anim4 = new Tween({ z: -20 })
  .to({ z: -8.5 }, 2.5, Tween.QUAD_IN_OUT)
  .wait(0.1)
  .to({ z: -20 }, 2.5, Tween.QUAD_IN_OUT)
  .loop()

  {/*Launcher*/}
  const anim5 = new Tween({ z: -52 })
  .to({ z: -61 }, 2, Tween.QUAD_IN_OUT)
  .wait(0.1)
  .to({ z: -52 }, 2, Tween.QUAD_IN_OUT)
  .loop()

  {/*Launcher
  const anim5 = new Tween({ y: 80 },{ z: -20 })
  .to({y: 70, z: -8.5 }, 3, Tween.QUAD_IN_OUT)
  .wait(0.1)
  .to({ y: 80, z: -20 }, 3, Tween.QUAD_IN_OUT)
  .wait(0.1)
  .loop()
*/}

export default function World() {
  const bodyRef = useRef()
  const bodyRef2 = useRef()
  const bodyRef3 = useRef()
  const bodyRef4 = useRef()
  const bodyRef5 = useRef()
  const engine = useWorld()

  useEffect(() => {
    const body = bodyRef.current
    return engine.onUpdate(() => {
      anim.set(engine.getServerTime())
      body.setPositionZ(anim.value.z)
    })
  }, [])
  useEffect(() => {
    const body = bodyRef2.current
    return engine.onUpdate(() => {
      anim2.set(engine.getServerTime())
      body.setPositionZ(anim2.value.z)
    })
  }, [])
  useEffect(() => {
    const body = bodyRef3.current
    return engine.onUpdate(() => {
      anim3.set(engine.getServerTime())
      body.setPositionZ(anim3.value.z)
    })
  }, [])
  useEffect(() => {
    const body = bodyRef4.current
    return engine.onUpdate(() => {
      anim4.set(engine.getServerTime()+1)
      body.setPositionZ(anim4.value.z)
    })
  }, [])

      {/*Launcher*/}
      useEffect(() => {
    const body = bodyRef5.current
    return engine.onUpdate(() => {
      anim5.set(engine.getServerTime())
      {/*body.setPositionY(anim5.value.y)*/}
      body.setPositionZ(anim5.value.z)
    })
  }, [])

  return (
    <app>
      <skysphere src="sky2.png" encoding="srgb" />
  
      {/* elevator */}
      <rigidbody ref={bodyRef} type="kinematic" position={[-9, 32, 0]}>
      <model src="launcher2.glb" scale={0.4} allColliders="trimesh"/> 
      </rigidbody>

      <rigidbody ref={bodyRef2} type="kinematic" position={[-4.5, 32, 0]}>
      <model src="launcher2.glb" scale={0.4} allColliders="trimesh"/> 
      </rigidbody>  

      <rigidbody ref={bodyRef3} type="kinematic" position={[0, 32, 0]}>
      <model src="launcher2.glb" scale={0.4} allColliders="trimesh"/> 
      </rigidbody>  

      <rigidbody ref={bodyRef4} type="kinematic" position={[4.5, 32, 0]}>
      <model src="launcher2.glb" scale={0.4} allColliders="trimesh"/> 
      </rigidbody>  

      {/*Launcher GLB*/}
      <rigidbody ref={bodyRef5} type="kinematic">
      <model src="launcher.glb" position={[-97.33, 59.15, 0]} scale={0.3} allColliders="trimesh"/>       
      <model src="launcher.glb" position={[-88.33, 57.15, 0]} scale={0.3} allColliders="trimesh"/>       
      <model src="launcher.glb" position={[-79.33, 55.15, 0]} scale={0.3} allColliders="trimesh"/>       
      </rigidbody> 

      {/*  47733c floor 
      <rigidbody>
        <box size={[420, 0.1, 420]} color="#47733c" /> 
      </rigidbody> */}

      {/* Descendants Magic Eden link*/}
      {<billboard position={[-18, 1.7, -8]} axis="y">
        <text
          value={'Click here to purchase Descendants'}
          bgColor="black"
          color="white"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {engine.open('https://www.magiceden.io/marketplace/descendants', true)}} // open link in a new tab
        />
      </billboard>}

      {/*Castle Collisions*/}
      <rigidbody> 
        <model src="castle.glb" position={[0,9,0]} rotation={[0,0,0]} scale={7} allColliders="trimesh"/> 
        <model src="accessories.glb" position={[0,8.7,0]} rotation={[0,0,0]} scale={7} allColliders="trimesh"/>
        <model src="stand.glb" position={[-3,-0.2,-28]} scale={1} allColliders="trimesh"/> 
        <model src="landscape.glb" position={[0,9,0]} scale={7} allColliders="trimesh"/>
        <model src="mountain_pass1.glb" position={[0,8.9,0]} scale={7} allColliders="trimesh"/>
        <model src="house1.glb" position={[0,9,0]} scale={7} allColliders="trimesh"/>
        <model src="road.glb" position={[0,9,0]} scale={7} allColliders="trimesh"/>
        </rigidbody>

      {/*Pattern Maze*/}
        <rigidbody> 
        <model src="pattern maze_desc.glb" position={[16,30,-27]} scale={1}/>
        {/*<model src="pattern maze_funguyz_sliders.glb" position={[16,30,-27]} scale={1}/>*/}
        </rigidbody>
        {/*Portal to Start*/}
        {<group position={[5,-0.2,-25]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={3}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-140,72.5,-22], -90) 
              }}
            />
          </group>}
          {<billboard position={[5,2,-25]} axis="y">
            <text
              value={'Pattern Maze Start'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
            />
          </billboard>}
          {<group position={[-32.5,-0.2,-17.5]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={3}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-140,72.5,-22], -90) 
              }}
            />
          </group>}
          {<billboard position={[-32.5,2,-17.5]} axis="y">
            <text
              value={'Pattern Maze Start'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
            />
          </billboard>}

        {/*Winner Exit*/}
          {<billboard position={[10.3,1.75,-8]} axis="y">
            <text
              value={'Click to Exit'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
              onClick={e => {
                console.log(e)
                e.avatar.teleport([-3, 2, -28], 180) }}
            />
          </billboard>}
 
      {/*NFT Credits*/}
      {<billboard position={[-142.2,74,-17]} axis="y">
        <text
          value={'Owned by @Felipeeee.sol'}
          bgColor="blue"
          color="yellow"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {engine.open('https://twitter.com/Profeten_Felipe', true)}} // open link in a new tab
        />
      </billboard>}
      {<billboard position={[-100.2,67,-17]} axis="y">
        <text
          value={'Owned by @0xpeti'}
          bgColor="blue"
          color="yellow"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {engine.open('https://twitter.com/0xpeti', true)}} // open link in a new tab
        />
      </billboard>}
      {<billboard position={[-107,60,-59.5]} axis="y">
        <text
          value={'Owned by @upscule'}
          bgColor="blue"
          color="yellow"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {engine.open('https://twitter.com/upscule', true)}} // open link in a new tab
        />
      </billboard>}
      {<billboard position={[-65,54,-53.5]} axis="y">
        <text
          value={'Owned by @Dyzrel.sol'}
          bgColor="blue"
          color="yellow"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {engine.open('https://twitter.com/Dyzrel.sol', true)}} // open link in a new tab
        />
      </billboard>}
      {<billboard position={[-74,46,-8]} axis="y">
        <text
          value={'Owned by @Sidvicious843'}
          bgColor="blue"
          color="yellow"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {engine.open('https://twitter.com/Sidvicious843', true)}} // open link in a new tab
        />
      </billboard>}
      {<billboard position={[-13,34,-21]} axis="y">
        <text
          value={'Owned by @rganizedgeneral'}
          bgColor="blue"
          color="yellow"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {engine.open('https://twitter.com/rganizedgeneral', true)}} // open link in a new tab
        />
      </billboard>}

        {/*Surrender*/}
          <rigidbody>
            <model src="army33.glb" position={[-142.7,72.5,-24]} rotation={[0,45,0]} scale={1} allColliders="trimesh"
                onClick={e => {
                  console.log(e)
                  e.avatar.teleport([-3, 3, -28], -90)}}
              />
          </rigidbody>
          {<billboard position={[-142.2,75,-23.5]} axis="y">
            <text
              value={'Surrender?'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
            />
          </billboard>}

        {/*Safety Net*/}
          {<group position={[-120, 45, -20]}>
           <trigger
              size={[50, 0.1, 15]} debug={false}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-140,130,-22], -90) }}
            />

          </group>}
          {<group position={[-103, 30, -40]}>
           <trigger
              size={[15,0.1,60]} debug={false}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-140,130,-22], -90) }}
            />
          </group>}

          {<group position={[-85, 25, -58]}>
           <trigger
              size={[45, 0.1, 15]} debug={false}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-140,130,-22], -90) }}
            />
          </group>}

          {<group position={[-68, 26, -30]}>
           <trigger
              size={[15, 0.1, 50]} debug={false}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-68,80,-57], 180) }}
            />
          </group>}

          {<group position={[-40, 21, -14]}>
           <trigger
              size={[50, 0.1, 25]} debug={false}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-68,80,-57], 180) }}
            />
          </group>}

          {<group position={[-9, 15, -14]}>
           <trigger
              size={[25, 0.1, 25]} debug={false}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-68,80,-57], 180) }}
            />
          </group>}

       {/*Checkpoint1*/}
       <rigidbody>
            <model src="army33.glb" position={[-65,52.5,-59.5]} rotation={[0,-45,0]} scale={1} allColliders="trimesh"/>
          </rigidbody>
          {<billboard position={[-65,55,-59]} axis="y">
            <text
              value={'Checkpoint'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
            />
          </billboard>}


        {/*Respawn Portals*/}
        
          {/*Throne*/}
          {<group position={[4.7,1.3,7.5]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={3}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-3, 3, -28], 175) 
              }}
            />
          </group>}
         
          {/*FrontRight*/}
          {<group position={[-20.6,23.2,14.4]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={2}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-3, 3, -28], 175) //frontright
              }}
            />
          </group>}
          
          {/*FrontLeft*/}
          {<group position={[14.2,23.2,14.4]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={2}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-3, 3, -28], 175)
              }}
            />
          </group>}
         
          {/*BackLeft*/}
          {<group position={[14.8,27.9,38.6]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={2}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-3, 3, -28], 175)
              }}
            />
          </group>}

          {/*Mountain Pass*/}
          {<group position={[177.4,49.8,33]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={2}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-3, 3, -28], 175)
              }}
            />
          </group>}
      
      {/*Castle Passable*/}
        <model src="castle_passable.glb" position={[0,9,0]} rotation={[0,0,0]} scale={7} />
        <model src="mountain_pass_passable.glb" position={[0,9,0]} scale={7} />
        <model src="mountain_pass_armies.glb" position={[0,9,0]} scale={7} />

        <model src="levelup.glb" position={[0,9,0]} rotation={[0,0,0]} scale={7} 
          onClick={e => {engine.open('https://levelup.ancestors.digital/', true)}}
          />
        <model src="staking.glb" position={[0,9,0]} rotation={[0,0,0]} scale={7} 
          onClick={e => {engine.open('https://staking.ancestors.digital/descendants', true)}}
          />
        <model src="dreamtools_chart.glb" position={[0,9,0]} rotation={[0,0,0]} scale={7} 
          onClick={e => {engine.open('https://dreamtools.app/collections/descendants', true)}}
          />
         
         {/*Mission Portals*/}
         {/*throneroom*/}
          <model src="desc_portal1.glb" position={[-28,10,0]} rotation={[0,0,0]} scale={8}
                onClick={e => {
                  console.log(e)
                  e.avatar.teleport([7, 2, 24], 200)}}
              />
          {<group position={[-12, 0, -12.5]}>
            <box size={[2, 0.1, 2]} color="white" opacity={0}/>
            <trigger
              size={3}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([7, 2, 24], 200) }}
            />
          </group>}
          {<billboard position={[-12, 3.7, -12]} axis="y">
            <text
              value={'Throne Room'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
            />
          </billboard>}

         {/*backleft*/}
          <model src="desc_portal2.glb" position={[-28,10,0]} rotation={[0,0,0]} scale={8}
          onClick={e => {
                console.log(e)
                e.avatar.teleport([15,28,36], 20) }}
            />
          {<group position={[-20, 0, -12.5]}>
            <box size={[2, 0.1, 2]} color="white" opacity={0}/>
            <trigger
              size={3}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([15,28,36], 20) }}
            />
          </group>}
          {<billboard position={[-20, 3.7, -12]} axis="y">
            <text
              value={'Castle Turret'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
            />
          </billboard>}

         {/*frontright ([-21,23.3,12], 20)*/}

         {/*mountain pass*/}
          <model src="desc_portal3.glb" position={[0,10,0]} rotation={[0,0,0]} scale={8}
                onClick={e => {
                  console.log(e)
                  e.avatar.teleport([146,25,45.8], 270) }}
              />
          {<group position={[-16, 0, -12.5]}>
            <box size={[2, 0.1, 2]} color="white" opacity={0}/>
            <trigger
              size={3}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([177,49.9,25], 270) }}
            />
          </group>}  
            
          {<billboard position={[-16, 3.7, -12]} axis="y">
            <text
              value={'Mountain Pass'}
              bgColor="black"
              color="white"
              bgRadius={0.1}
              padding={0.2}
            />
          </billboard>}

         {/*frontleft*/}
            <model src="desc_portal4.glb" position={[0,10,0]} rotation={[0,0,0]} scale={8}
            />

        {/*Maze Portals*/}
        
          {/*Throne*/}
          {<group position={[42.2,1.05,-120.6]}> 
          <model src="stand.glb" scale={0.5}/>
          <trigger
              size={3}
              onEnter={avatarId => {
                engine.getAvatar(avatarId).teleport([-19.5, 1.1, -24.75], 90) 
              }}
            />
          </group>}


      {/* a trigger box that teleports when you walk on it */}
      {/*<group position={[-2, 0.05, -3]}>
        <box size={[2, 0.1, 2]} />
        <trigger
          size={2}
          onEnter={avatarId => {
            engine.getAvatar(avatarId).teleport([0, 0, 10])
          }}
        />
      </group>*/}

      {/* ground and spawn point */}
      {/*<spawn position={[-3, 3, -28]} rotation={180}/> */}
      {<spawn position={[-140,72.5,-22]} rotation={-90}/>}
    </app>
  )
}
