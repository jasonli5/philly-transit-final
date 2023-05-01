import styled from "@emotion/styled";
import React from "react";

const Style = styled.div`
  footer {
    background-color: #1a1a1a;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3rem 0;
    color: white;
    z-index: 100;
  }

  .footer-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .text-container h4 {
    color: #949494;
    margin-bottom: 0.2rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .text-container p {
    width: 50%;
    font-size: 0.9rem;
    font-weight: 300;
  }

  .rights-text {
    color: #949494;
    font-size: 0.8rem;
  }

  .left-col {
    flex: 2;
  }

  .email {
    color: #949494;
    font-size: 0.8rem;
  }

  .color {
    background-color: white;
    color: #1a1a1a;
  }

  @media screen and (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }

    .text-container {
      text-align: center;
    }

    .text-container p {
      margin: 0 auto;
    }

    .rights-text {
      text-align: center;
    }
  }
`;

// TODO Change the color of the footer based on the background color of the page
interface FooterProps {
  color?: boolean;
}

const Footer: React.FC<FooterProps> = ({ color = false }) => {
  return (
    <Style>
      <footer className={color ? "color" : ""}>
        <div className="footer-container">
          <div className="left-col">
            <div className="text-container">
              <h4>About Philly Transit</h4>
              <p>
                Philly Transit aims to make the history of Philadelphia&apos;s
                public transportation available for residents and transit
                enthusiasts. We love public transit and wanted to create a
                website that would allow us to share our passion with others.
              </p>
            </div>
          </div>
          <div className="right-col">
            <p className="rights-text">© 2023 Philly Transit</p>
            <a className="email" href="mailto:jasonli2068@gmail.com">
              jasonli2068@gmail.com
            </a>
            <br />
            <a className="email" href="mailto:spencer6506@gmail.com">
              spencer6506@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </Style>
  );
};

export default Footer;
