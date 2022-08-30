type LatLong = {
  lat: number,
  lng: number,
}

type MLHer = {
  location: LatLong
  name: string
};

// Initialize and add the map
function initMap(): void {

  // Add your location here!!
  const mlhTeam: MLHer[] = [
    {
      location: { lat: 37.774929, lng: -122.419418 }, name: "Ayush Ganotra"
    }
  ]

  const ashburn = { lat: 39.0438, lng: -77.4874 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 3,
      center: ashburn,
    }
  );

  const markers: google.maps.Marker[] = []

  mlhTeam.forEach(function (friendo) {
    new google.maps.Marker({
      position: friendo.location,
      map: map,
      title: friendo.name,
    })
  }
  );

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };
