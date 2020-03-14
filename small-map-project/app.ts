const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

declare var ol: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  45.26688;

  const coordinates = { lat: 45.26688, lng: 25.051242 }; // Can't fetch coordinates from Google API, use dummy ones

  document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
  new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
      zoom: 16
    })
  });
}

// function searchAddressHandler(event: Event) {
//   event.preventDefault();
//   const enteredAdress = addressInput.value;

//   //send this to google API
// }

form.addEventListener("submit", searchAddressHandler);
