import React, {useState, useEffect} from 'react'
import Hello from '../demo/Hello'
import HelloClass from '../demo/HelloClass'
import HelloHoc from '../demo/HelloHoc'
import HelloHooks from '../demo/HelloHooks'

const Employee = () => {
  let [loading, setLoading] = useState(true)
  useEffect(
    () => {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      // console.log(1);
    },
    [loading]
  )
  return (
    <>
      <h1>hello employee</h1>
      <Hello name='123'></Hello>
      <HelloClass name='cls'></HelloClass>
      <HelloHoc name='hoc' loading={loading}/>
      <HelloHooks name='hooks'></HelloHooks>
    </>
  )
}

export default Employee