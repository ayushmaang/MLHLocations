import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";
import * as $ from 'jquery';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjqeHkUC2oQf467G4X17JRYy9s5DZC0NM",
  authDomain: "mlhers-locations.firebaseapp.com",
  projectId: "mlhers-locations",
  storageBucket: "mlhers-locations.appspot.com",
  messagingSenderId: "619178096730",
  appId: "1:619178096730:web:f44ff6d2a4b882fb894063",
  measurementId: "G-ZB87LN6MKL",
  databaseURL: "https://mlhers-locations-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

getRedirectResult(auth).then(function (result) {
  console.log(result);
  if (result?.user) {
    console.log(result.user);
    var user = result.user;
    $("#markerAdder").removeClass("disabled");
  }
  else {
    $("#markerAdder").addClass("disabled");
  }
})

function signIn() {
  signInWithRedirect(auth, provider);
}


const database = getDatabase(app);
const dbRef = ref(getDatabase());

let dbMarkers = null

export function addMarker() {

  const user = auth.currentUser;

  const geoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=" + document.getElementById("autocomplete").value + "&key=AIzaSyC7khT58mCuadUv2AIR1xREKo1IVenDKnE"

  $.getJSON(geoCode, function (data) {
    set(ref(database, 'markers/' + user?.uid), {
      username: user?.displayName,
      lat: data.results[0].geometry.location.lat,
      lng: data.results[0].geometry.location.lng
    });

    location.reload();

  })


}

// Initialize and add the map
async function initMap() {

  var input = document.getElementById('autocomplete');
  new google.maps.places.Autocomplete(input);

  await get(child(dbRef, `markers`)).then((snapshot) => {
    if (snapshot.exists()) {
      dbMarkers = snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

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

  console.log(dbMarkers)

  await Object.keys(dbMarkers).forEach(function (key, index) {
    new google.maps.Marker({
      position: { lat: parseFloat(dbMarkers[key].lat), lng: parseFloat(dbMarkers[key].lng) },
      map: map,
      title: dbMarkers[key].username,
    })
  });
}

document.getElementById("markerAdder").addEventListener("click", addMarker)
document.getElementById("signInWithGoogle").addEventListener("click", signIn)

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };
