import React , {Component} from 'react'
import {Table} from 'antd'
import {employeeColumns} from './colums'
import {EmployeeResponse} from '../../interface/employee'
import QueryForm from './QueryForm'
import './index.css'
import 'antd/dist/antd.css'

interface State {
  employee: EmployeeResponse
}

class Employee extends Component<{}, State> {
  state: State = {
    employee: undefined
  }

  setEmployee = (employee: EmployeeResponse) => {
    this.setState({
      employee
    })
  }

  render() {
    return (
      <>
        <QueryForm onDataChange={this.setEmployee} />
        <Table columns={employeeColumns} dataSource={this.state.employee} className="table"></Table>
      </>
    )
  }
}

export default Employee