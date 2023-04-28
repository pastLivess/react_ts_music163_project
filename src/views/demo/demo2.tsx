import React, { Component, PureComponent } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  name: string
  age: 18
}
interface IState {
  count: number
  message: string
}
export default class Demo2 extends PureComponent<IProps, IState> {
  state = {
    count: 100,
    message: 'hello'
  }
  render(): ReactNode {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}
