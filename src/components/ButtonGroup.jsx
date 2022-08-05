import React from 'react'
import { NavLink } from 'react-router-dom'


const ButtonGroup = () => {
  return (
    <>
      <NavLink className="view" to="/view">
        View
      </NavLink>
      <NavLink className="remove" to="/remove">
        Remove
      </NavLink>
    </>
  )
}

export default ButtonGroup