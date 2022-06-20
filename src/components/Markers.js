import React from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css'; 
import data from "./../data/Tooltipdata";
import SinglePopup from "./SinglePopup";
import SingleTooltip from "./SingleTooltip";


export default function Markers() {
  //console.log(data);

  return (
    <>
      {data.map((marker,index) => {
        return (
          <div key={index}>
            <Marker position={marker.position} marker={marker}>
              <Tooltip opacity={1}> 
                <SingleTooltip marker={marker}></SingleTooltip>
              </Tooltip>
              <Popup closeButton={false}>
                <SinglePopup marker={marker}></SinglePopup>
              </Popup>
            </Marker>
          </div>
        );
      })}
    </>
  );
}

//(React-leaflet Component) for putting all the markers on the map with individual popup and tooltips
