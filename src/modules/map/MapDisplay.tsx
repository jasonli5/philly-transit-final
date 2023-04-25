import React, { useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { TransitInfoJSON, TransitModeOptionsType } from "@/types";
import TransitRoute from "@/modules/map/TransitRoute";
import SelectOption from "@/components/Select";
import StationStop from "@/components/StationStop";
import transitInfo from "@/assets/TransitInfo.json";
import styled from "@emotion/styled";

const Style = styled.div`
  .map-container {
    width: 100%;
    height: 100vh;
    display: flex;
  }

  #map {
    width: 70%;
    flex: 2;
  }

  #sidebar {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1;
    background-color: white;
    flex: 1;
  }

  .textbox {
    background-color: white;
    border: 1px solid black;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
  }

  .title-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    margin-top: 10rem;
  }

  .selectedRouteText {
    color: red;
  }

  .options-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  .mode-select {
    width: 150px;
  }

  .station-title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .map-container {
      flex-direction: column;
    }

    #map {
      width: 100%;
      min-height: 60%;
    }

    #sidebar {
      width: 100%;
    }

    .title-container {
      margin-top: 0;
    }

    .station-title-container {
      margin-top: 0;
    }

    #sidebar h1 {
      font-size: 1.5rem;
    }

    #sidebar h2 {
      font-size: 1.2rem;
    }

    #sidebar h3 {
      font-size: 1rem;
    }
  }
`;

export const center = {
  lat: 39.952583,
  lng: -75.165222,
};

export const mapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
};

const transitModeOptions: TransitModeOptionsType = {
  Subway: ["BSL", "MFL"],
  Regional: [
    "AIR",
    "CHE",
    "CHW",
    "CYN",
    "FOX",
    "LAN",
    "MED",
    "NOR",
    "PAO",
    "TRE",
    "WAR",
    "WIL",
    "WTR",
  ],
  Trolley: ["10", "11", "13", "15", "34", "36", "101", "102"],
  Bus: [],
};

function Map() {
  const [mode, setMode] =
    React.useState<keyof typeof transitModeOptions>("Subway");

  const [selectedRoute, setSelectedRoute] = React.useState<
    keyof TransitInfoJSON
  >(transitModeOptions[mode][0]);

  const [selectedStation, setSelectedStation] = React.useState<string>("");

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  // Change the selected route when the mode changes
  useEffect(() => {
    setSelectedRoute(transitModeOptions[mode][0]);
    setSelectedStation("");
  }, [mode]);

  function onRouteClick(
    routeName: keyof TransitInfoJSON,
    event: google.maps.MapMouseEvent
  ) {
    setSelectedRoute(routeName);

    if (map && event.latLng) {
      map.panTo(event.latLng);
    }
  }

  function onModeChange(event: any, value: string | null) {
    if (value) {
      setMode(value as keyof typeof transitModeOptions);
    }
  }

  function onStationClick(
    event: google.maps.MapMouseEvent,
    stationName: string
  ) {
    setSelectedStation(stationName);
    if (map && event.latLng) {
      map.panTo(event.latLng);
      map.setZoom(16);
    }
  }

  console.log(transitModeOptions[mode]);

  return (
    <Style>
      <div className="map-container">
        <GoogleMap
          id="map"
          zoom={12}
          heading={9}
          center={center}
          options={mapOptions}
          onLoad={(map) => setMap(map)}
        >
          {transitModeOptions[mode].map((routeName, key) => (
            <div key={key} className="route-container">
              <TransitRoute
                key={key}
                routeName={routeName}
                clickHandler={onRouteClick}
              />

              {transitInfo[routeName].stops.map((stop, index) => (
                <StationStop
                  key={index}
                  stopPosition={stop.position}
                  stationName={stop.name}
                  clickHandler={onStationClick}
                />
              ))}
            </div>
          ))}
        </GoogleMap>
        <div id="sidebar">
          <div className="title-container">
            <h1>Transit Map</h1>
            <h2>
              Current selection:{" "}
              <span className="selectedRouteText">
                {transitInfo[selectedRoute].name}
              </span>
            </h2>
            <h2>Mode of transit: {transitInfo[selectedRoute].mode}</h2>
            <h3>
              Daily ridership: {transitInfo[selectedRoute].dailyRidership}
            </h3>
          </div>
          <div className="options-container">
            <SelectOption
              label="Filter by mode"
              options={Object.keys(transitModeOptions)}
              onModeChange={onModeChange}
            />
          </div>
          <div className="station-title-container">
            <h2>{selectedStation}</h2>
          </div>
        </div>
      </div>
    </Style>
  );
}

export default Map;