import React, { ReactNode, ReactElement, ReactComponentElement, ReactChildren } from 'react'

interface IAuth {
  isLogin: boolean
}

function useAuth(): IAuth {
  return {isLogin: true}
}

function redirectTo(url: string) {
  console.log(123)
}

interface IProps {
  children?: ReactChildren
}

export default (props: IProps) => {
  const { isLogin } = useAuth();
  console.log(123)
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    redirectTo('/login');
  }
}