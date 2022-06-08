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

  console.log(markers, count)
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

  let clusterMentions = 0;
  
  for (var i = 0; i < markers.length; i++) {
    clusterMentions+= markers[i].options.marker.values.mentions;
  }
 
  return L.divIcon({
    html: `<span class="markerClusterLabel">${clusterMentions}</span>`,
    className: `${options.clusterclass}`,
    iconSize: L.point(40, 40),
  });
};


// const mouseEvent = function(cluster){
//   const markers = cluster.getAllChildMarkers();
//   const count = cluster.getChildCount();

//   let clusterMentions = 0,clusterInsights=0,clusterRating=0;
//   for (var i = 0; i < markers.length; i++) {
//     //console.log(markers[i])
//     clusterMentions+= markers[i].options.marker.values.mentions;
//     clusterInsights+= markers[i].options.marker.values.insights;
//     clusterRating+= markers[i].options.marker.values.ratings;
//   }
//    clusterRating = clusterRating/count;
//   const obj = {
//     name : cluster.getChildCount() + "Locations",
//     values : { mentions: clusterMentions,insights: clusterInsights,
//       ratings: clusterRating
//     }
//   }
  
//     return <Tooltip interactive={true} opacity={1}> 
//     <SingleTooltip marker={obj}></SingleTooltip>
//   </Tooltip>
  
// }


export default function Markercluster() {
  return (
    <div>
      <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        spiderfyOnMaxZoom={true}
        spiderfyDistanceMultiplier={1}
        showCoverageOnHover={false}
      >
        <Markers />
      </MarkerClusterGroup>
    </div>
  );
}
