import React, { Component } from 'react'

type Props = {
  name?: string;
}

type State = {}

class Welcome extends Component<Props, State> {
  props: Props = {
    name: "Unknown"
  }
  state = {}

  // Set default props
  static defaultProps = {
    name: "Unknown"
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}

Welcome.defaultProps = {
  name: "Unknown"
}

export default Welcome;