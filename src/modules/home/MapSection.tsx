import NavigationButton from "@/components/NavigationButton";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

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

  .image-container {
    border-radius: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 1rem;
    overflow: hidden;
    width: 75%;
    max-width: 100%;
    height: 20rem;
    max-height: 30rem;
    position: relative;
    display: flex;
  }

  .image {
    object-fit: cover;
    object-position: center;
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

          <div className="image-container">
            <Image
              className="image"
              src="/images/map.png"
              alt="google maps"
              fill
            />
          </div>
          <NavigationButton href="/map">Explore the map!</NavigationButton>
        </div>
      </section>
    </Style>
  );
};

export default MapSection;
