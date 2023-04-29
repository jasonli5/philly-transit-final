import Header from "@/components/Header";
import styled from "@emotion/styled";
import React from "react";

const StyleVariables = {
  card_width: "250px",
  card_border_radius: "16px",
  row_increment: "10px",
  card_small: 26,
  card_medium: 33,
  card_large: 45,
};

const Style = styled.div`
  .background {
    background-color: #1a1a1a;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .container {
    margin: 0;
    padding: 0;
    width: 70%;
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
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card_small {
    grid-row-end: span ${StyleVariables.card_small};
  }

  .card_medium {
    grid-row-end: span ${StyleVariables.card_medium};
  }

  .card_large {
    grid-row-end: span ${StyleVariables.card_large};
  }
`;

const Gallery = () => {
  return (
    <Style>
      <div className="background">
        <div className="container">
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
          <div className="card card_small"></div>
          <div className="card card_medium"></div>
          <div className="card card_large"></div>
        </div>
      </div>
    </Style>
  );
};

export default Gallery;
