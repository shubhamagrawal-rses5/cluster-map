import React from "react";
import "./style.css";

export default function SingleTooltip(props) {
  const marker = props.marker;
  return (
    <div className="box">
      <h2>{marker.name}</h2>
      <hr></hr>
      <table>
        <thead />
        <tbody>
          <tr>
            <td className="item">Mentions</td>
            <td className="value">{marker.values.mentions}</td>
          </tr>
          <tr>
            <td className="item">Insights</td>
            <td className="value">{marker.values.insights}</td>
          </tr>
          <tr>
            <td className="item">Star Rating</td>
            <td className="value">{marker.values.rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

//Tooltip (React-leaflet Component) for a single marker
