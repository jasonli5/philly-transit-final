import React, { useMemo } from "react";
import { Polyline } from "@react-google-maps/api";
import { InfoBox } from "@react-google-maps/api";
import { TransitInfoJSON } from "@/types";
import styled from "@emotion/styled";

// Import Transit GeoJSON
import BSL_GEOJSON from "@/assets/routes/BSL.json";
import MFL_GEOJSON from "@/assets/routes/MFL.json";
import AIR_GEOJSON from "@/assets/routes/AIR.json";
import CHE_GEOJSON from "@/assets/routes/CHE.json";
import CHW_GEOJSON from "@/assets/routes/CHW.json";
import CYN_GEOJSON from "@/assets/routes/CYN.json";
import FOX_GEOJSON from "@/assets/routes/FOX.json";
import LAN_GEOJSON from "@/assets/routes/LAN.json";
import MED_GEOJSON from "@/assets/routes/MED.json";
import NOR_GEOJSON from "@/assets/routes/NOR.json";
import PAO_GEOJSON from "@/assets/routes/PAO.json";
import TRE_GEOJSON from "@/assets/routes/TRE.json";
import WAR_GEOJSON from "@/assets/routes/WAR.json";
import WIL_GEOJSON from "@/assets/routes/WIL.json";
import WTR_GEOJSON from "@/assets/routes/WTR.json";
import _10_GEOJSON from "@/assets/routes/10.json";
import _11_GEOJSON from "@/assets/routes/11.json";
import _13_GEOJSON from "@/assets/routes/13.json";
import _15_GEOJSON from "@/assets/routes/15.json";
import _34_GEOJSON from "@/assets/routes/34.json";
import _36_GEOJSON from "@/assets/routes/36.json";
import _101_GEOJSON from "@/assets/routes/101.json";
import _102_GEOJSON from "@/assets/routes/102.json";

const GEOJSON_ROUTES = {
  BSL: BSL_GEOJSON,
  MFL: MFL_GEOJSON,
  AIR: AIR_GEOJSON,
  CHE: CHE_GEOJSON,
  CHW: CHW_GEOJSON,
  CYN: CYN_GEOJSON,
  FOX: FOX_GEOJSON,
  LAN: LAN_GEOJSON,
  MED: MED_GEOJSON,
  NOR: NOR_GEOJSON,
  PAO: PAO_GEOJSON,
  TRE: TRE_GEOJSON,
  WAR: WAR_GEOJSON,
  WIL: WIL_GEOJSON,
  WTR: WTR_GEOJSON,
  "10": _10_GEOJSON,
  "11": _11_GEOJSON,
  "13": _13_GEOJSON,
  "15": _15_GEOJSON,
  "34": _34_GEOJSON,
  "36": _36_GEOJSON,
  "101": _101_GEOJSON,
  "102": _102_GEOJSON,
};

interface TransitRouteProps {
  routeName: keyof typeof GEOJSON_ROUTES;
  clickHandler?: (
    routeName: keyof TransitInfoJSON,
    event: google.maps.MapMouseEvent
  ) => void;
}

export const TransitRoute: React.FC<TransitRouteProps> = ({
  routeName,
  clickHandler,
}) => {
  const geoData = GEOJSON_ROUTES[routeName];
  const geoProperties = geoData["features"][0]["properties"];

  const options = {
    strokeColor: geoProperties["stroke"],
    strokeOpacity: geoProperties["stroke-opacity"],
  };

  const [strokeWeight, setStrokeWeight] = React.useState(
    geoProperties["stroke-width"]
  );

  const [infoBoxCoords, setInfoBoxCoords] =
    React.useState<google.maps.LatLng | null>(null);

  // Convert GeoJSON to Google Maps Path (LatLngLiteral[])
  const pathFromGeoJson = useMemo(() => {
    const path: google.maps.LatLngLiteral[] = [];

    const coordinates = geoData["features"][0]["geometry"]["coordinates"];
    coordinates.forEach((coordinate: number[]) => {
      path.push({
        lat: coordinate[1],
        lng: coordinate[0],
      });
    });

    return path;
  }, [geoData]);

  function mouseOverHandler(event: google.maps.MapMouseEvent) {
    // Change stroke color to black on hover
    setStrokeWeight(geoProperties["stroke-width"] + 3);

    // Set the InfoBox position to the mouse position
    setInfoBoxCoords(event.latLng);
  }

  function mouseOutHandler() {
    // Change stroke color back to original color
    setStrokeWeight(geoProperties["stroke-width"]);

    // Remove the InfoBox
    setInfoBoxCoords(null);
  }

  return (
    <div>
      <Polyline
        path={pathFromGeoJson}
        options={{ ...options, strokeWeight: strokeWeight }}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onClick={(e: google.maps.MapMouseEvent) => {
          clickHandler && clickHandler(routeName, e);
        }}
      />
      {infoBoxCoords && (
        <InfoBox
          options={{
            closeBoxURL: "",
            enableEventPropagation: true,
          }}
          position={infoBoxCoords}
        >
          <div className="textbox">{geoProperties.title}</div>
        </InfoBox>
      )}
    </div>
  );
};

export default TransitRoute;
