import Header from "@/components/Header";
import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import GalleryData from "@/assets/Gallery.json";
import Meta from "@/components/Meta";
import BackToTopButton from "@/components/BackToTopButton";

const StyleVariables = {
  card_width: "300px",
  row_increment: "10px",
  card_border_radius: "16px",
  card_small: 26,
  card_medium: 33,
  card_large: 45,
};

const Style = styled.div`
  .background {
    background-color: #1a1a1a;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    padding: 2rem 0;
  }

  .container {
    margin: 0;
    padding: 0;
    width: 70%;
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(auto-fill, ${StyleVariables.card_width});
    grid-auto-rows: ${StyleVariables.row_increment};
    justify-content: center;
  }

  .card {
    padding: 0;
    margin: 15px 10px;
    border-radius: ${StyleVariables.card_border_radius};
    background-color: rgba(16, 92, 158, 0.062);
    overflow: hidden;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  .small {
    height: 240px;
    grid-row-end: span ${StyleVariables.card_small};
  }

  .medium {
    height: 310px;
    grid-row-end: span ${StyleVariables.card_medium};
  }

  .large {
    height: 430px;
    grid-row-end: span ${StyleVariables.card_large};
  }
`;

const Gallery = () => {
  return (
    <Style>
      <Meta title="Gallery" />
      <header>
        <Header fixed />
      </header>
      <div className="background">
        <div className="container">
          {GalleryData.map((item, key) => (
            <Card
              key={item.name}
              size={
                key % 3 === 0 ? "large" : key % 3 === 1 ? "medium" : "small"
              }
              src={`/gallery/${item.name}`}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <BackToTopButton />
    </Style>
  );
};

const CardStyled = styled.div`
  padding: 0;
  margin: 15px 10px;
  border-radius: ${StyleVariables.card_border_radius};
  background-color: rgba(16, 92, 158, 0.062);
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }

  .small {
    height: 250px;
    grid-row-end: span ${StyleVariables.card_small};
  }

  .medium {
    height: 300px;
    grid-row-end: span ${StyleVariables.card_medium};
  }

  .large {
    height: 380px;
    grid-row-end: span ${StyleVariables.card_large};
  }
`;

interface CardProps {
  size: "small" | "medium" | "large";
  src: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ size, src, description }) => {
  return (
    <CardStyled className={`card ${size}`}>
      <Image
        className="image"
        src={src}
        alt={description}
        width={600}
        height={600}
      />
    </CardStyled>
  );
};

export default Gallery;
