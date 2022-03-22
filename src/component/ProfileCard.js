import React from 'react'

function ProfileCard({writer}) {
  return (
   <div className='cards'>
   <img src= {`images/${writer.avatar}.png`}
   height="300px" width="300px" alt={writer.img}/>

  <div className='textGroup'>
  <h3>{writer.name} </h3>
  <p>{writer.email}</p>
  <p>{writer.phone}</p>

  <button className='actionBtn' >read bio</button>
  </div>
  
   </div>
  )
}

export default ProfileCard