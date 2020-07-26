import React from 'react'
import {PageContainer} from '@ant-design/pro-layout'
import {Form, Input} from 'antd'

export default (): React.ReactNode => {
  return (
    <>
      <PageContainer>
        <Form>
          <Form.Item label="姓名" name="name" rules={[{required: true}]} labelCol={{span: 8}} wrapperCol={{span: 2}}>
            <Input />
          </Form.Item>
        </Form>
      </PageContainer>
    </>
  )
}