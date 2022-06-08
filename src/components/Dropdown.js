import React from 'react'
import "./style.css";

export default function Dropdown(props) {
    const marker = props.marker;
  return(
    <div className="box">
    <h2>Dropdown</h2>
    <hr></hr>
    <p>{marker.position + " "}</p>
  </div>
  )
}
