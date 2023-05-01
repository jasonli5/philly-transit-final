import { useLoadScript } from "@react-google-maps/api";
import Map from "@/modules/map/MapDisplay";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";

// import data from "@/assets/test.json";

const MapPage = () => {
  // Make sure Google Maps API is loaded before rendering the map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  if (!isLoaded) return <h4 style={{ textAlign: "center" }}>Loading...</h4>;

  return (
    <>
      <Meta title="Interactive Map" />
      <Header />
      <Map />
      <h3></h3>
    </>
  );
};

export default MapPage;
