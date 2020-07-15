import React, { useState, useEffect } from 'react'
import {Form, Input, Select, Button} from 'antd'
import {EmployeeRequest} from '../../interface/employee'

import { get } from '../../utils/request';
import { GET_EMPLOYEE_URL } from '../../constants/urls';

// import { FormComponentProps } from 'antd/lib/form';
// interface Props extends FormComponentProps {
  // onDataChange(data: EmployeeResponse): void
// }
const QueryFormHooks = (props: any) => {
  const [name, setName] = useState('')
  const [departmentId, setDpartmentId] = useState<number|undefined>()

  const handleNameChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const handleDepartmentChange = (value: number) => {
    setDpartmentId(value)
  }
  const handleSumbit = () => {
    queryEmployee({name, departmentId})
  }
  function queryEmployee(param: EmployeeRequest) {
    // console.log(name, 1e9, departmentId);
    // const data = [
    //     {
    //         "id": 1,
    //         "key": 1,
    //         "name": "小明",
    //         "department": "技术部",
    //         "hiredate": "2019-07-01",
    //         "level": "1级"
    //     }, {
    //         "id": 2,
    //         "key": 2,
    //         "name": "小莉",
    //         "department": "产品部",
    //         "hiredate": "2017-07-01",
    //         "level": "2级"
    //     }
    // ]
    // props.onDataChange(data)
    get(GET_EMPLOYEE_URL, param).then(res => {
        console.log(11);
        // props.onDataChange(res.data.slice( Math.random() > 0.5 ? 0: 1));
        props.onDataChange(res.data);
    });
  }
  useEffect(() => {
    queryEmployee({name, departmentId})
  }, []) // eslint-disable-line 
  // react-hooks/exhaustive-deps
  // queryEmployee({name, departmentId})
  return (
    <>
      <Form layout='inline'>
        <Form.Item>
          <Input
            placeholder='姓名'
            style={{width:120}}
            allowClear
            onChange={handleNameChange}
            value={name}
          ></Input>
        </Form.Item>
        <Form.Item>
          <Select
            placeholder='部门'
            style={{width:120}}
            allowClear
            onChange={handleDepartmentChange}
            value={departmentId}
          >
            {
              // @typescript-eslint/no-array-constructor
              /* eslint-disable */
              new Array( 
                [1, '技术部'],
                [2, '产品部'],
                [3, '运营部'],
                [4, '生产部']
              ).map((item) => {
                return <Select.Option key={item[0]} value={item[0]}>{item[1]}</Select.Option>
              })
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type='primary' onClick={handleSumbit}>查询</Button>
        </Form.Item>
      </Form>
    </>
  )
}

// const WrapQueryForm = Form.create<Props>({
//   name: 'employee_query'
// })(QueryFormHooks);

export default QueryFormHooks