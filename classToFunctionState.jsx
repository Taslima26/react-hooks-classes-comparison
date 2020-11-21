import React, { Component, useState, useEffect } from 'react'

class App extends Component {
  // function constructor
  constructor(props) {
    super(props)

    this.state = {
      opened: false,
    }

    this.setOpened = this.setOpened.bind(this)
  }

  setOpened() {
    this.setState(!this.state.opened)
  }

  // function render
  render() {
    const uuid = '324i24-23943fds-243i'

    return (
      <div>
        <div>Size of shoes: {this.props.size}</div>
        <button onClick={this.setOpened}>
          {this.state.opened ? 'Open' : 'Close'}
        </button>
      </div>
    )
  }
}

function App({ size }) {
  const [opened, setOpened] = setState(false)

  const uuid = '324i24-23943fds-243i'

  return (
    <div>
      <div>Size of shoes: {size}</div>
      <button onClick={() => setOpened(!opened)}>
        {opened ? 'Open' : 'Close'}
      </button>
    </div>
  )
}

// <App size="xl"/>
