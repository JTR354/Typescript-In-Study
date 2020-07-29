import React from 'react'
import {IRow, IToggle} from './modal.d'
interface IProps {
  row?: IRow
  toggle: IToggle
  visible: boolean
}

export default ({ row, toggle, visible }: IProps) => {
  return (
    <div style={{
      position: 'fixed',
      color: '#fff',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      backgroundColor: 'rgba(0,0,0,.8)',
      zIndex: visible ? 1 : -1,
      opacity: visible ? 1 : 0,
      transition: 'all 0.3s ease'
    }}
      onClick={() => {
        toggle()
      }}
    >
      <h3>Modal</h3>
      <p>{row?.id}</p>
      <p>{row?.name}</p>
      <p>
        <button onClick={() => {
          toggle()
        }}>BACK</button>
      </p>
    </div>
  )
}