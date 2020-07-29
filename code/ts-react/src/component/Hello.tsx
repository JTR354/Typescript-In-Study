import React, { useState, useCallback } from 'react'
import { IRow, IToggle } from './modal.d'
import Modal from './Modal'
interface Greeting {
  name: string
}

export default (props: Greeting) => {
  const [row, setRow] = useState<IRow | undefined>(() => {
    return { id: 1, name: 'jtr' }
  })
  const [visible, setVisible] = useState(false)
  const toggle: IToggle = useCallback((row) => {
    setVisible((bool) => !bool)
    if (row?.id) {
      setRow(row)  
    } else {
      setRow(undefined)
    }
  }, [])
  return (
    <>
      <div>
        <h1>hello {props.name}</h1>
        <button onClick={() => {
          toggle()
        }}>undefined</button>
        <button onClick={() => {
          toggle({id: 2, name: 'lost'})
        }}>顯示肉</button>
        {
          <Modal visible={visible} row={row} toggle={toggle}></Modal>
        }
      </div>
    </>
  )
}