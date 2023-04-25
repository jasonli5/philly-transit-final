import { useLoadScript } from "@react-google-maps/api";
import Map from "@/modules/map/MapDisplay";
import Header from "@/components/Header";

const MapPage = () => {
  // Make sure Google Maps API is loaded before rendering the map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default MapPage;
