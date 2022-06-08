import React from "react";
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css'; 
import 'react-leaflet-markercluster/dist/styles.min.css';

import L from "leaflet";
import Markers from "./Markers";
import Markercluster from "./Markercluster";




delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


export default function Mymap() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      style={{ height: "100vh", width: "100vw" }}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       
      {/* <Markercluster/> */}
      <Markers/>
    </MapContainer>
  );
}
