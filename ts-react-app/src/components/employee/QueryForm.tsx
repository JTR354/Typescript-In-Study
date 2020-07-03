import React, { Component } from 'react'
import { Form, Input, Select , Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { get} from '../../utils/request'
import {GET_EMPLOYEE_URL} from '../../constants/urls'
import {EmployeeRequest, EmployeeResponse} from '../../interface/employee'

interface Props extends FormComponentProps  {
  onDataChange(data: EmployeeResponse) : void
}

const {Option} = Select

class QueryForm extends Component<Props, EmployeeRequest> {
  state: EmployeeRequest = {
    name: '',
    departmentId: undefined
  }
  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      name: e.currentTarget.value
    })
  }
  handleDepartmentChange = (value: number) => {
    this.setState({
      departmentId: value
    })
  }
  handleSubmit = () => {
    this.queryEmployee(this.state)
  }
  queryEmployee (params: EmployeeRequest) {
    get(GET_EMPLOYEE_URL, params).then(res => {
      this.props.onDataChange(res.data)
    })
  }
  render() {
    return (
      <Form layout="inline">
        <Form.Item>
          <Input
            placeholder="姓名"
            style={{width: 120}}
            allowClear
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="部门"
            style={{width:120}}
            allowClear
            value={this.state.departmentId}
            onChange={this.handleDepartmentChange}
          >
            <Option value={1}>技术部</Option>
            <Option value={2}>产品部</Option>
            <Option value={3}>市场部</Option>
            <Option value={4}>运营部</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit}>查询</Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrapQueryForm = Form.create<Props>({
  name: 'employee_query'
})(QueryForm);

export default WrapQueryForm