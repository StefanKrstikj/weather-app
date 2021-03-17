import React from 'react'
import WeatherData from './components/WeatherData'
import Day from './components/Day'
import { ListGroup } from "react-bootstrap"
import './styles/style.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tempUnitC: '℃',
      tempUnitK: 'K',
      windSpeedUnitM: 'm/s',
      weather: WeatherData,
    }
  }

  render() {
    const days = this.state.weather.map(day =>
      <Day key={day.day}
        day={day.day}
        temp={day.temp}
        tempUnitC={this.state.tempUnitC}
        tempUnitK={this.state.tempUnitK}
        windDirection={day.windDirection}
        windSpeed={day.windSpeed}
        windSpeedUnitM={this.state.windSpeedUnitM}
        type={day.type} />)

    return (
      <div className="main">
        <ListGroup horizontal>
          {days}
        </ListGroup>
      </div>
    )
  }
}

export default App