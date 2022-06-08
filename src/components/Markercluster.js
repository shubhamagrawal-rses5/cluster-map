import React from "react";
import "./Markercluster.css";
import MarkerClusterGroup from "react-leaflet-markercluster-v2";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Markers from "./Markers";

const createClusterCustomIcon = function (cluster) {
  const markers = cluster.getAllChildMarkers();
  const count = cluster.getChildCount();
  let size = "LargeXL";

  if (count < 10) {
    size = "Small";
  } else if (count >= 10 && count < 100) {
    size = "Medium";
  } else if (count >= 100 && count < 500) {
    size = "Large";
  }
  const options = {
    clusterclass: `markerCluster${size}`,
  };

  let n = 0;
  for (var i = 0; i < markers.length; i++) {
    //console.log(markers[i])
    n += markers[i].options.marker.values.mentions;
  }

  return L.divIcon({
    html: `<span class="markerClusterLabel">${n}</span>`,
    className: `${options.clusterclass}`,
    iconSize: L.point(40, 40),
  });
};

export default function Markercluster() {
  return (
    <div>
      <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        spiderfyOnMaxZoom={true}
        showCoverageOnHover={false}
      >
        <Markers />
      </MarkerClusterGroup>
    </div>
  );
}
