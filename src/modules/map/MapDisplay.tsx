import React, { useEffect } from "react";
import { GoogleMap, Marker, MarkerClusterer } from "@react-google-maps/api";
import Image from "next/image";
import { TransitInfoJSON, TransitModeOptionsType } from "@/types";
import TransitRoute from "@/modules/map/TransitRoute";
import StationStop from "@/modules/map/StationStop";
import SelectOption from "@/components/Select";
import transitInfo from "@/assets/TransitInfo.json";
import MapControl from "@/modules/map/MapControl";
import styled from "@emotion/styled";
import { Checkbox } from "@mui/joy";
import { RealTimeDataType } from "@/types";
import styles from "@/styles/Map.module.css";

const Style = styled.div`
  .map-container {
    width: 100%;
    height: 100%;
    min-height: 100vh;
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
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
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
    gap: 1rem;
  }

  .mode-select {
    width: 150px;
  }

  .station-description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem 1rem;
    margin: 2rem auto;
    text-align: center;
    position: relative;
  }

  .text {
    font-size: 1.3rem;
    font-weight: 600;
    color: black;
  }

  .station-title {
    font-size: 1.5rem;
  }

  .image-container {
    width: 300px;
    height: 300px;
    max-height: 350px;
    overflow: hidden;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .image {
    object-fit: cover;
    object-position: center;
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
  Subway: ["BSL", "MFL", "BR-S"],
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
  Other: ["NHSL", "PATCO"],
  Bus: [],
  // Off: [],
};

const subwayExtensions = [
  "BSL-BLVD-EXT",
  "BSL-NAVAL-EXT",
] as typeof transitModeOptions.Subway;

function Map() {
  const [mode, setMode] =
    React.useState<keyof typeof transitModeOptions>("Subway");

  const [showRealTimeBus, setShowRealTimeBus] = React.useState<boolean>(false);
  const [showRealTimeRail, setShowRealTimeRail] =
    React.useState<boolean>(false);
  const [showProposedLines, setShowProposedLines] =
    React.useState<boolean>(false);

  const [realTimeBusData, setRealTimeBusData] =
    React.useState<RealTimeDataType>([]);

  const [realTimeRailData, setRealTimeRailData] =
    React.useState<RealTimeDataType>([]);

  const [selectedRoute, setSelectedRoute] = React.useState<
    keyof TransitInfoJSON
  >(transitModeOptions[mode][0]);

  const [selectedStation, setSelectedStation] = React.useState<
    [stationName: string, stationImg: string]
  >(["", ""]);

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  // Change the selected route when the mode changes and toggle off checkboxes
  useEffect(() => {
    setSelectedRoute(transitModeOptions[mode][0]);
    setSelectedStation(["", ""]);
    setShowRealTimeBus(false);
    setShowRealTimeRail(false);
    setShowProposedLines(false);
  }, [mode]);

  // Update the real time tracking every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (showRealTimeBus) {
        fetchRealTimeBusData();
      }
      if (showRealTimeRail) {
        fetchRealTimeRailData();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [showRealTimeBus, showRealTimeRail]);

  async function fetchRealTimeBusData() {
    const response = await fetch("/api/realtime-bus");
    const data = await response.json();

    if (!data) return;

    const routes = data.routes[0];
    const keys = Object.keys(routes) as Array<keyof typeof routes>;

    const allPositions: any = [];

    keys.forEach((key) => {
      try {
        // @ts-ignore
        routes[key].forEach((bus) => {
          allPositions.push({
            lat: bus.lat,
            lng: bus.lng,
            id: bus.route_id,
            heading: bus.heading,
          });
        });
      } catch (error) {
        console.log(error);
      }
    });

    setRealTimeBusData(allPositions);
  }

  async function fetchRealTimeRailData() {
    const response = await fetch("/api/realtime-rail");
    const data = await response.json();

    if (!data) return;

    const routes = data;

    const keys = Object.keys(routes) as Array<keyof typeof routes>;

    const allPositions: any = [];

    try {
      // @ts-ignore
      routes.forEach((train) => {
        console.log(train.lat, train.lng, train.route_id);
        allPositions.push({ lat: train.lat, lng: train.lon, id: train.line });
      });
    } catch (error) {
      console.log(error);
    }

    setRealTimeRailData(allPositions);
  }

  // Load all real time buses from SEPTA API
  function onShowRealTimeBusChange() {
    setShowRealTimeBus(!showRealTimeBus);
    fetchRealTimeBusData();
  }

  function onShowRealTimeRailChange() {
    setShowRealTimeRail(!showRealTimeRail);
    fetchRealTimeRailData();
  }

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
    stationName: string,
    stationImg: string
  ) {
    setSelectedStation([stationName, stationImg]);
    if (map && event.latLng) {
      map.panTo(event.latLng);
      map.setZoom(16);
    }
  }

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
          <MapControl position="BOTTOM_CENTER">
            <button
              style={{
                backgroundColor: "#466adf",
                border: "none",
                borderRadius: "1rem",
                color: "white",
                fontFamily: "Inter, sans-serif",
                padding: "0.5rem 1rem",
                margin: "3rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => {
                navigator.geolocation.getCurrentPosition((position) => {
                  const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  };
                  map?.setCenter(pos);
                  map?.setZoom(16);
                });
              }}
            >
              Current Location
            </button>
          </MapControl>

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
                  clickHandler={(e) => onStationClick(e, stop.name, stop.img)}
                />
              ))}
            </div>
          ))}
          {showProposedLines &&
            subwayExtensions.map((line) => (
              <TransitRoute
                routeName={line}
                key={line}
                clickHandler={onRouteClick}
              />
            ))}

          {showRealTimeBus && (
            <MarkerClusterer gridSize={70}>
              {(clusterer) => (
                <div>
                  {realTimeBusData.map((bus, index) => (
                    <Marker
                      key={index}
                      position={new google.maps.LatLng(bus.lat, bus.lng)}
                      label={bus.id}
                      title={bus.id}
                      clusterer={clusterer}
                    />
                  ))}
                </div>
              )}
            </MarkerClusterer>
          )}
          {showRealTimeRail && (
            <div>
              {realTimeRailData.map((train, index) => (
                <Marker
                  key={index}
                  position={new google.maps.LatLng(train.lat, train.lng)}
                  label={{
                    text: train.id,
                    className: styles["train-label"],
                    color: "white",
                    fontSize: "12px",
                    fontFamily: "Inter",
                  }}
                  title={train.id}
                  icon={{
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0,
                  }}
                  options={{ zIndex: 1000 }}
                />
              ))}
            </div>
          )}
        </GoogleMap>
        <div id="sidebar">
          <div className="title-container">
            <h1>
              <span className="selectedRouteText">
                {transitInfo[selectedRoute].name}
              </span>
            </h1>
            <h2 className="text">
              Mode of transit: {transitInfo[selectedRoute].mode}
            </h2>
            <h3 className="text">
              Daily ridership:{" "}
              {new Intl.NumberFormat("en-US").format(
                transitInfo[selectedRoute].dailyRidership!
              )}
            </h3>
          </div>
          <div className="options-container">
            <SelectOption
              label="Filter by mode"
              options={Object.keys(transitModeOptions)}
              onModeChange={onModeChange}
            />
            {(mode == "Bus" || mode == "Trolley") && (
              <Checkbox
                label="Realtime bus/trolley"
                onChange={onShowRealTimeBusChange}
              />
            )}
            {mode == "Regional" && (
              <Checkbox
                label="Realtime rail"
                onChange={onShowRealTimeRailChange}
              />
            )}
            {mode == "Subway" && (
              <Checkbox
                label="Proposed subway lines"
                onChange={() => setShowProposedLines(!showProposedLines)}
              />
            )}
          </div>
          {selectedStation[1] != "" && (
            <div className="station-description-container">
              <h2 className="station-title">{selectedStation[0]}</h2>
              <div className="image-container">
                <Image
                  priority
                  className="image"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 10px",
                  }}
                  alt={selectedStation[1]}
                  fill
                  src={`/stations/${selectedStation[1]}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Style>
  );
}

export default Map;
