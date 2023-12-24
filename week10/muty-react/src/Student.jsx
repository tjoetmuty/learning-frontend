import React from 'react'
import App from './App'

const Student = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.gender}</p>
    </div>
  )
}

export default Student