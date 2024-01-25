import React from 'react'
import { useParams } from 'react-router-dom'

function Room() {
    let { wayne } = useParams()
  return (
      <div>
          <h1>Welcome to the room{wayne}</h1>
    </div>
  )
}

export default Room