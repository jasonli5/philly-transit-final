import { Marker } from "@react-google-maps/api";
import React from "react";

interface StationStopProps {
  stopPosition: number[];
  stationName: string;
  clickHandler: (event: google.maps.MapMouseEvent) => void;
}

export const StationStop: React.FC<StationStopProps> = ({
  stopPosition,
  stationName,
  clickHandler,
}) => {
  const [iconSize, setIconSize] = React.useState(12);

  // Set icon size to 16px on hover
  const handleMouseOver = () => {
    setIconSize(20);
  };

  const handleMouseOut = () => {
    setIconSize(12);
  };

  return (
    <Marker
      position={new google.maps.LatLng(stopPosition[0], stopPosition[1])}
      title={stationName}
      icon={{
        url: "/images/stop-icon.png",
        scaledSize: new google.maps.Size(iconSize, iconSize),
        anchor: new google.maps.Point(iconSize / 2, iconSize / 2),
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={clickHandler}
    />
  );
};

export default StationStop;
