import React from 'react'
import './style.css'

const userInput = props => {
  return(
    <input
      type="text"
      className="user-input"
      value={props.name}
      placeholder={props.placeholder}
      onChange={props.changed}
    />
  )
}

export default userInput