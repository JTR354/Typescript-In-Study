import React from 'react'
import Hello from '../demo/Hello'
// import HelloClass from '../demo/HelloClass'
import HelloHoc from '../demo/HelloHoc'

const Employee = () => {
  return (
    <>
      <h1>hello employee</h1>
      <Hello name='123'></Hello>
      {/* <HelloClass name='cls'></HelloClass> */}
      <HelloHoc name='hoc' loading={true}/>
    </>
  )
}

export default Employee