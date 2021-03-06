import React from "react";
import "./Markercluster.css";
import MarkerClusterGroup from "react-leaflet-markercluster-v2";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Markers from "./Markers";
import { ClusterTooltip } from "./ClusterTooltip";
import { ClusterPopup } from "./ClusterPopup";

export default function Markercluster(props) {

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
  
    let clusterMentions = 0,
      clusterInsights = 0,
      clusterRating = 0;
    for (var i = 0; i < markers.length; i++) {
      //console.log(markers[i])
      clusterMentions += markers[i].options.marker.values.mentions;
      clusterInsights += markers[i].options.marker.values.insights;
      clusterRating += markers[i].options.marker.values.rating;
    }
    clusterRating = Math.ceil((clusterRating * 10) / count) / 10;
    const marker = {
      name: cluster.getChildCount() + " Locations",
      values: {
        mentions: clusterMentions,
        insights: clusterInsights,
        rating: clusterRating,
      },
    };
    let clicks = 0;
    cluster.bindTooltip(ClusterTooltip(marker));
  
    // cluster.on('click',()=>{cluster.bindPopup(ClusterPopup(marker))})
    // cluster.on('dblclick',()=>{console.log("double clicked")})
    
    cluster.on("click", () => {
      clicks = clicks + 1;
      setTimeout(function () {
        if (clicks === 1) {
          cluster.bindPopup(ClusterPopup(marker));
          clicks = 0;
        }
      }, 300);
    });
    cluster.on("dblclick", (e) => {
      clicks = 0;
      console.log("double clicked", props.zoomLevel);
      //  props.setZoomLevel(props.zoomLevel+1);
      //L.zoomIn();
    });
  
    return L.divIcon({
      html: `<span class="markerClusterLabel">${clusterMentions}</span>`,
      className: `${options.clusterclass}`,
      iconSize: L.point(40, 40),
    });
  };

  return (
    <div>
      <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        spiderfyOnMaxZoom={true}
        spiderfyDistanceMultiplier={1}
        showCoverageOnHover={false}
        zoomToBoundsOnClick={false}
      >
        <Markers />
      </MarkerClusterGroup>
    </div>
  );
}
