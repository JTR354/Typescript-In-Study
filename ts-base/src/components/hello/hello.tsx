import React from 'react'

interface Greeting {
  name: string
}

export default function (props : Greeting) {
  return (
  <h1>Hello {props.name}</h1>
  )
}
