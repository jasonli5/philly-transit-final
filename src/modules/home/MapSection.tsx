import NavigationButton from "@/components/NavigationButton";
import styled from "@emotion/styled";
import Link from "next/link";

const Style = styled.div`
  .map-home-section {
    background-color: white;
  }

  .map-home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding: 2rem;
    margin: 0 auto;
    max-width: 80%;
    height: 100%;
  }

  .map-home-heading {
    color: var(--dark-text-color);
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  #google_map-section {
    margin: 0 auto;
    max-width: 100%;
    max-height: 30rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    object-fit: contain;
    margin-bottom: 1rem;
  }
`;

export const MapSection = () => {
  return (
    <Style>
      <section className="map-home-section" id="map-section">
        <div className="map-home-container">
          <h1 className="map-home-heading" id="map-home-heading">
            Map
          </h1>

          <img id="google_map-section" src="/images/map.png" />
          <NavigationButton href="/map">Explore the map!</NavigationButton>
        </div>
      </section>
    </Style>
  );
};

export default MapSection;
