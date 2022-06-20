import React ,{useState}from "react";
import { MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'; 
import 'react-leaflet-markercluster/dist/styles.min.css';
import L from "leaflet";
import Markercluster from "./Markercluster";
// import { useState } from "react/cjs/react.production.min";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


export default function Mymap() {
  const [zoomLevel,setZoomLevel] =useState(3);
  return (
    <MapContainer
      center={[30.505, 9.09]} //some random center
      style={{ height: "100vh", width: "100vw" }}
      zoom={zoomLevel}
      maxZoom={6}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Markercluster zoomLevel = {zoomLevel} setZoomLevel={setZoomLevel}/>
    </MapContainer>
  );
}
