import React from 'react'

const User = ({user:{photpURL, displayName}}) => {
  return (
    <div className='flex items-center shrink-0'>
      <img className='w-10 h-10 rounded-full mr-2' src={photpURL} alt={displayName} />
      <span className='hidden md:block'>{displayName}</span>
    </div>
  )
}

export default User
