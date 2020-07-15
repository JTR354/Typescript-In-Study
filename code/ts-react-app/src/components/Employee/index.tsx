import React, {useState} from 'react'
// import Hello from '../demo/Hello'
// import HelloClass from '../demo/HelloClass'
// import HelloHoc from '../demo/HelloHoc'
// import HelloHooks from '../demo/HelloHooks'

import './index.css'

import QueryForm from './QueryForm'
import {Table} from 'antd'

import {employeeColumns} from './columns'
import { EmployeeResponse } from '../../interface/employee'

const Employee = () => {
  // let [loading, setLoading] = useState(true)
  // useEffect(
  //   () => {
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1000)
  //     // console.log(1);
  //   },
  //   [loading]
  // )
  const [employee, setEmployee] = useState<EmployeeResponse>(undefined)
  const getTotal = () => {
    let total: number;
    if (typeof employee !== 'undefined') {
        total = employee.length
    } else {
        total = 0
    }
    return <p>共 {total} 名员工</p>
  }
  // useMemo(() => {
  //   getTotal()
  // }, [employee])
  return (
    <>
      {/* <h1>hello employee</h1> */}
      {/* <Hello name='123'></Hello> */}
      {/* <HelloClass name='cls'></HelloClass> */}
      {/* <HelloHoc name='hoc' loading={loading}/> */}
      {/* <HelloHooks name='hooks'></HelloHooks> */}
      <QueryForm onDataChange={setEmployee}></QueryForm>
      {getTotal()}
      <Table className='table' columns={employeeColumns} dataSource={employee}></Table>
    </>
  )
}

export default Employee