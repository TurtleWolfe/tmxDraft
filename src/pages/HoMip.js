import React from "react";
import { Box } from "@mui/material";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import {
  formatRelative,
  // parseISO
}
  from "date-fns";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

// import homeMap from "./homeMap.css";
import mapStyles from "../components/mapStyles";
// import mapStyles from "./mapStyles";

import svg_art from "../assets/coding_art.svg";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "90vh",
};
const center = {
  // Australia
  // lat: -34.397,
  // lng: 150.644,

  // Atlanta
  lat: 33.748550,
  lng: -84.391502,
};
const options = {
  styles: mapStyles,
  // disableDefaultUI: false,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function HoMip() {
  // load libraries & api key
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  // const [selected, setSelected] = React.useState(null);
  // const [selectedPlace, setSelectedPlace] = React.useState(null);

  // const mapRef = React.useRef();
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  // }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>
        tMX{" "}
        <span
          role="img"
          aria-label="moto cross"
        >
          🏍️
        </span>
      </h1>

      {/* <Locate panTo={panTo} /> */}
      {/* <Search panTo={panTo} /> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        // onLoad={onMapLoad}
        onClick={(event) => {
          console.log("map clicked", event);
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);

        }}
      >

        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            // key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
          // onClick={() => {
          //   // setSelected(marker);
          // }}
          // icon={{
          //   url: `/bear.svg`,
          //   origin: new window.google.maps.Point(0, 0),
          //   anchor: new window.google.maps.Point(15, 15),
          //   scaledSize: new window.google.maps.Size(30, 30),
          // }}
          />
        ))}

      </GoogleMap>
      {/* <img alt="funky illustration" src={svg_art} />
      <Box sx={{ width: "50%" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Box> */}
    </Box>
  );
}
