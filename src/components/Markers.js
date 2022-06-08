import React from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css'; 
import "./style.css";
import data from "./../data/Tooltipdata";
import Dropdown from "./Dropdown";
import SingleTooltip from "./SingleTooltip";


export default function Markers() {
  //console.log(data);

  return (
    <>
      {data.map((marker,index) => {
        return (
          <div key={index}>
            <Marker position={marker.position} marker={marker}>
              <Tooltip interactive={true} opacity={1}> 
                <SingleTooltip marker={marker}></SingleTooltip>
              </Tooltip>
              <Popup closeButton={false}>
                <Dropdown marker={marker}></Dropdown>
              </Popup>
            </Marker>
          </div>
        );
      })}
    </>
  );
}
