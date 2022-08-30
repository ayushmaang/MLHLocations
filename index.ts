/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Initialize and add the map
function initMap(): void {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  const ashburn = { lat: 39.0438, lng: -77.4874 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 3,
      center: ashburn,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: ashburn,
    map: map,
    title: "Ayush ",
  });

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
