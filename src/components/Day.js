import React from 'react'
import Widget from './Widget'
import { ListGroupItem } from "react-bootstrap"

class Day extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
    }
  }

  closeWidget = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  render() {
    return (
      <div>
        <ListGroupItem action variant="dark"
          onClick={() => { this.setState({ visible: true }) }}
        >
          {this.props.day}
          &nbsp;
          {this.props.temp}
          ℃
        </ListGroupItem>

        {this.state.visible && <Widget
          day={this.props.day}
          temp={this.props.temp}
          tempUnitC={this.props.tempUnitC}
          tempUnitK={this.props.tempUnitK}
          windDirection={this.props.windDirection}
          windSpeed={this.props.windSpeed}
          windSpeedUnitM={this.props.windSpeedUnitM}
          type={this.props.type}
          closeWidget={this.closeWidget}
          visible={this.state.visible}
        />}
      </div>
    )
  }
}

export default Day