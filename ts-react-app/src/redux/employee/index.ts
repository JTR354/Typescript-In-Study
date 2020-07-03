import {Dispatch} from 'redux'
import _ from 'lodash'

import {get, post} from '../../utils/request'

import {department, level} from '../../constants/options'

import {
  GET_EMPLOYEE_URL,
  CREATE_EMPLOYEE_URL,
  DELETE_EMPLOYEE_URL,
  UPDATE_EMPLOYEE_URL
} from '../../constants/urls';

import {
  GET_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE
} from '../../constants/actions';

import {
  EmployeeInfo,
  EmployeeRequest,
  EmployeeResponse,
  CreateRequest,
  DeleteRequest,
  UpdateRequest
} from '../../interface/employee';

type State = Readonly<{
  employeeList: EmployeeResponse
}>

type Action = {
  type: string
  payload: any
}

const initalState: State = {
  employeeList: undefined
}

export function getEmployee(param: EmployeeRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    get(GET_EMPLOYEE_URL, param).then(res => {
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data
      })
      callback()
    })
  }
}

export function createEmployee(param: CreateRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    post(CREATE_EMPLOYEE_URL, param).then(res => {
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: {
          name: param.name,
          department: department[param.departmentId],
          departmentId: param.departmentId,
          level: level[param.levelId],
          levelId: param.levelId,
          ...res.data
        }
      })
      callback()
    })
  }
}

export function deleteEmployee(param: DeleteRequest) {
  return (dispatch: Dispatch) => {
    post(DELETE_EMPLOYEE_URL, param).then(res => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: param.id
      })
    })
  }
}

export function updateEmployee(param: UpdateRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    post(UPDATE_EMPLOYEE_URL, param).then(res => {
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: param
      })
      callback()
    })
  }
}

export default function (state = initalState, action: Action) {
  switch(action.type) {
    default: 
      return state
  }
}