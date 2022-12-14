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
var currentUser = null

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

let map = new L.Map('map', {
  center: new L.LatLng(20, 0),
  zoom: 2,
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

async function initMap() {
  await get(child(dbRef, `markers`)).then((snapshot) => {
    if (snapshot.exists()) {
      dbMarkers = snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    set(ref(database, 'errors'), {
      error
    });

    document.getElementById("error").innerHTML += "Hmm seems like I can't get any markers. Is your internet still working?";

    console.error(error);
  });

  getRedirectResult(auth).then(function (result) {
    console.log(result);
    if (result?.user) {
      document.getElementById("markerAdder").classList.remove("disabled");
      currentUser = result.user;
      getMarkers(currentUser);
    }
    else {
      document.getElementById("markerAdder").classList.add("disabled");
      getMarkers(null);
    }
  }).catch(e => {
    console.log(e.toString())
    if (e.toString().includes("auth/web-storage-unsupported")) {
      document.getElementById("error").innerHTML += "Please enable 3rd party cookies, you may also be in incognito.";
    }
    console.log(auth);

    set(ref(database, 'errors/' + Date()), {
      promiseError: e,
      client: auth.clientVersion
    });
    document.getElementById("markerAdder").classList.add("disabled");
    getMarkers(null);
  })
}

async function getMarkers(user) {

  const lats = []
  const longs = []
  const names = []


  await Object.keys(dbMarkers).forEach(function (key, index) {

    const curLat = parseFloat(dbMarkers[key].lat)
    const curLong = parseFloat(dbMarkers[key].lng)

    if (lats.includes(curLat)) {
      names[lats.indexOf(curLat)] += "<br>" + dbMarkers[key].username;
    }
    else {
      lats.push(curLat);
      longs.push(curLong);
      names.push(dbMarkers[key].username);
    }
  });

  console.log(lats)
  console.log(lats.includes(39.2903848))

  for (var i = 0; i < lats.length; i++) {
    const curMarker = L.marker([lats[i], longs[i]]).addTo(map);
    if (currentUser) {
      curMarker.bindPopup(names[i]);
    }
  }
}

initMap();

document.getElementById("markerAdder").addEventListener("click", addMarker)
document.getElementById("signInWithGoogle").addEventListener("click", signIn)

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export { };
