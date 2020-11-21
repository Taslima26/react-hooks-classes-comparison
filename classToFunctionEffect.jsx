import React, { Component, useState, useEffect } from 'react'

function logUserIn(username) {
  return { username, loggedIn: false }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: {},
    }
  }

  setSignedIn(userObject) {
    this.setState(userObject)
  }

  componentDidMount() {
    // when the component fully mounts
    // The component ready, has been mounted onto the virtual dom
    // no data has been passed to it though
    this.setSignedIn(logUserIn())
  }

  componentDidUpdate(_, prevState) {
    if (prevState.signedIn !== this.state.signedIn) {
      this.setSignedIn(logUserIn(this.props.loggedIn.username))
    }
  }

  componentWillUnMount() {
    this.setState({ signedIn: {} })
  }

  render() {
    return (
      <div>
        <button>Start Timer</button>
      </div>
    )
  }
}

function App({ loggedIn }) {
  const [signedIn, setSignedIn] = useState({})

  useEffect(() => {
    setSignedIn(logUserIn())

    return setSignedIn({})
  }, [loggedIn])

  return (
    <div>
      {signedIn.username ? (
        <div>User: {signedIn.username}</div>
      ) : (
        <div>Please Log In</div>
      )}
      <button>Start Timer</button>
    </div>
  )
}

// <App size="xl"/>
