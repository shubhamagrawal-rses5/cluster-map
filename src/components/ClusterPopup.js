import "./style.css";

export function ClusterPopup(marker) {
  return `
  <div class="box">
        <h2>Dropdown</h2>
        <hr></hr>
        <p>${marker.name}</p>
      </div>`;
}

//Popup (React-leaflet function) for a marker cluster
