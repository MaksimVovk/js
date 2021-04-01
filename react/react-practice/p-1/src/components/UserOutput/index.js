import React from 'react'

const userOutput = props => {
  return(
    <div className="user-output">
      <p>{props.text}</p>
      <p>{props.name}</p>
    </div>
  )
}
export default userOutput