import React from 'react'

interface Greeting {
  name: string
}

export default (props: Greeting) => {
  return (
    <>
      <h1>hello {props.name}</h1>
    </>
  )  
}