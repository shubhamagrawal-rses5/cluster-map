import React from "react";
import { Marker, Tooltip } from "react-leaflet";
import data from "./../data/Tooltipdata";
import SingleTooltip from "./SingleTooltip";
import "./singleTooltip.css"


export default function Markers() {
  //console.log(data);
  return (
    <>
      {data.map((marker) => {
        return (
          <div key={marker.name}>
            <Marker position={marker.position}>
              <Tooltip className="Tooltip" >
                <SingleTooltip marker={marker}></SingleTooltip>
              </Tooltip>
            </Marker>
          </div>
        );
      })}
      </>
  );
}
