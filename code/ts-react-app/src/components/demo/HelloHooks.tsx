import React, { useState, useEffect } from 'react'
import {Button} from 'antd'
interface Greeting {
  name:string
  firestName: string
  lastName: string
}

const HelloHooks = (props: Greeting) => {
  let [count, setCount] = useState(0)
  let [text, setText] = useState('')
  useEffect(()=> {
    if (count > 5) {
      setText('休息一下')
    }
  }, [count])
  return (
    <>
      <p>你点击了{count}次{text}</p>
      <Button onClick={() => {setCount(count+1)}}>
        Hello {props.name}
      </Button>
    </>
  )
}

let dp : Omit<Greeting,'name'> = {
  firestName: '',
  lastName: ''
}

HelloHooks.defaultProps = {...dp}

export default HelloHooks