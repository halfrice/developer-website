import React, { useState } from "react"

class Clock extends React.Component {
  state = {
    time: "reticulating time...",
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleString() })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <>
        <span>{this.state.time}</span>
      </>
    )
  }
}

export default Clock
