





<rigidbody> 
<box size={[50, 0.1, 50]} position={[-3.5,1.2,29]} color="green" opacity={0} // firstfloor 
/> 
<box size={[10, 0.1, 10]} position={[14,23.3,12.5]} color="green" opacity={0} // frontleft
/>
<box size={[10, 0.1, 10]} position={[-21,23.3,12.5]} color="green" opacity={0} // frontright 
/>
<box size={[12, 0.1, 12]} position={[15,28,36]} color="green" opacity={0} // backleft
 />
</rigidbody>

import React from 'react'
import { useEngine } from 'hyperfy'

export default function Teleporter() {
  const engine = useEngine()

  return (
    <environment>
      {/* text that teleports when you click */}
      <billboard position={[-2, 1.6, -5]} axis="y">
        <text
          value={'Click to teleport'}
          bgColor="black"
          color="white"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {
            console.log(e)
            e.avatar.teleport([0, 0, 10])
          }}
        />
      </billboard>

      {/* a trigger box that teleports when you walk on it */}
      <group position={[2, 0, -5]}>
        <box size={[2, 0.1, 2]} />
        <trigger
          size={2}
          onEnter={avatarId => {
            engine.getAvatar(avatarId).teleport([0, 0, 10])
          }}
        />
      </group>

      {/* ground and spawn point */}
      <spawn />
      <rigidbody>
        <box
          color="#1c1d1c"
          size={[1000, 0.1, 1000]}
          position={[0, -0.05, 0]}
        />
      </rigidbody>
    </environment>
  )
}


export default function World() {
  return (
    <environment>
      <hdr src="sky.hdr" />
      <background color={0x10141d} />
      { <skysphere src="sky.png" encoding="srgb" /> }
      <spawn position={[0, 0.05, 0]} />
      <climbing />
      <gliding />
      <flying />
      <model src="tower0002.glb" position={[2,-0.5,0]} scale={7} allColliders="trimesh"/>
      {/* disable text */}
      <model src="desc_portal.glb" position={[2,0.3,-8]} scale={1} onClick={avatarId => engine.teleport(avatarId, [15, 15, 15])}/>
      <model src="tower0001.glb" position={[-2,-1,-6]} rotation={[0, 40, 0]} scale={8} allColliders="trimesh"/>

      <rigidbody>
        <box size={[150, 0.1, 150]} color="green" />
      </rigidbody>
      {/* text that teleports when you click */}
      <billboard position={[-2, 1.6, -5]} axis="y">
        <text
          value={'Click to teleport'}
          bgColor="black"
          color="white"
          bgRadius={0.1}
          padding={0.2}
          onClick={e => {
            console.log(e)
            e.avatar.teleport([0, 0, 10])
          }}
        />
      </billboard>
    </environment>
    
  )
}

