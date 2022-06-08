
import L from "leaflet";

const data = [];

// Generating random integer in range [x, y]
// Both values are inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// program to generate random strings
function getRandomString() {
  return Math.random().toString(36).substring(2, 9);
}

// program to generate random coordinate
function getRandomLatLng() {
//   var bounds = [
//       [-20.505, -100.09],
//       [70.505, 150.09],
//     ],
//     // southWest = bounds.getSouthWest(),
    // northEast = bounds.getNorthEast(),
    let lngSpan = 150 + 100,
      latSpan = 70.5+20.505;

  return new L.LatLng(
    -20.505 + latSpan * Math.random(),
    -100.09 + lngSpan * Math.random()
  );
}

for (let i = 0; i < 1000; i++) {
  let obj = {
    name: getRandomString(),
    values: {
      insights: getRandomInt(0, 1000),
      mentions: getRandomInt(0, 1000),
      rating: getRandomInt(0, 5),
    },
    position: getRandomLatLng(),
  };
  data.push(obj);
}
//console.log(data);
export default data;