import { useLoadScript } from "@react-google-maps/api";
import Map from "@/modules/map/MapDisplay";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

// import data from "@/assets/test.json";

const MapPage = () => {
  const [data, setData] = useState({ routes: [] });

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/hello");
      const data = await response.json();

      if (!data) return;

      const routes = data.routes[0];
      const keys = Object.keys(routes) as Array<keyof typeof routes>;

      keys.forEach((key) => {
        try {
          // @ts-ignore
          routes[key].forEach((bus) => {
            console.log(bus.lat, bus.lng, bus.route_id);
          });
        } catch (error) {
          console.log(error);
        }
      });
    }
    // getData();
  }, []);

  // Make sure Google Maps API is loaded before rendering the map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Map />
      <h3></h3>
    </>
  );
};

export default MapPage;
