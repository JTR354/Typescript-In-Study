import React from 'react'
interface IProps {
  children?: React.ReactChildren
}
export default (props: IProps) => {
  console.log(1e9)
  return <div>{ props.children }</div>
}