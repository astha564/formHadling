import React from 'react'

const User = (props) => {
  return (
    <div className=' bg-amber-100 text-black'>
      {props.elem.fullName}
    </div>
  )
}

export default User
