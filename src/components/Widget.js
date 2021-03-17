import React, { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

let Widget = (props) => {

  const [temp, toKelvin] = useState(props.temp)
  const [unitTemp, changeTempUnit] = useState(false)

  return (
    <div>
      <Modal show={props.visible} onHide={props.closeWidget}>
        <Modal.Header>
          <Modal.Title>{props.day}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Temperature: {temp} {unitTemp ? props.tempUnitK : props.tempUnitC}</p>
          <p>Wind Direction: {props.windDirection}</p>
          <p>Wind Speed: {props.windSpeed} {props.windSpeedUnitM}</p>
          <p>Type: {props.type}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => {
            toKelvin(temp + 273.15)
            changeTempUnit(!unitTemp)
          }} disabled={unitTemp}
            variant="secondary">Convert to Kelvin</Button>

          <Button onClick={props.closeWidget}
            variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Widget