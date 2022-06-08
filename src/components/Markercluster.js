import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import Markers from "./Markers";
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css'; 
import 'react-leaflet-markercluster/dist/styles.min.css';
import './Markercluster.css'

const createClusterCustomIcon = function (cluster) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: L.point(33, 33, true),
    });
  }; 

export default function Markercluster() {

  return (
     <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}
        maxClusterRadius={150}
        spiderfyOnMaxZoom={true}>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup>
  );
}
