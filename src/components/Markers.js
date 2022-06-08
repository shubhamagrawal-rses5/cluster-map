import React from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import data from "./../data/Tooltipdata";
import Dropdown from "./Dropdown";
import SingleTooltip from "./SingleTooltip";
import "./style.css";

export default function Markers() {
  //console.log(data);

  return (
    <>
      {data.map((marker,index) => {
        return (
          <div key={index}>
            <Marker position={marker.position}>
              <Tooltip className='tooltip-menu'>
                <SingleTooltip marker={marker}></SingleTooltip>
              </Tooltip>
              <Popup className="Dropdown" closeButton={false}>
                <Dropdown marker={marker}></Dropdown>
              </Popup>
            </Marker>
          </div>
        );
      })}
    </>
  );
}
