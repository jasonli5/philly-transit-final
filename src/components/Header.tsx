import styled from "@emotion/styled";
import SubwayIcon from "@mui/icons-material/Subway";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Style = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 5rem;
    height: 3.5rem;
    width: 90%;
    position: fixed;
    z-index: 2;
    background-color: white;
    left: 5%;
    top: 2rem;
    border-radius: 10rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  header img {
    width: 2rem;
    height: 2rem;
  }

  header > a {
    color: var(--dark-text-color);
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 0.75rem;
    padding: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .nav_links {
    list-style: none;
  }

  .nav_links li {
    display: inline-block;
    padding: 0 20px;
  }

  .nav_links li a {
    color: var(--dark-text-color);
    text-decoration: none;
    font-weight: 600;
  }

  .menu-button {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .nav_links li {
      display: none;
    }

    header > a span {
      font-size: 1rem;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      padding: 0;
      align-items: center;
    }

    .menu-button {
      display: flex;
      justify-content: end;
      position: relative;
    }

    .active-menu .menu-button {
      top: -50px;
    }

    .active-menu {
      display: block;
      background-color: white;
      height: 90vh;
      border-radius: 3rem;
      padding-top: 1.5rem;
      z-index: 3;
    }

    .active-menu .nav_links li {
      display: block;
      text-align: center;
      padding: 20px;
      font-size: 2rem;
    }
  }
`;

interface HeaderProps {
  fixed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ fixed }) => {
  const [open, setOpen] = React.useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <Style>
      <header
        className={open ? "active-menu" : ""}
        style={{ position: !fixed ? "fixed" : "relative" }}
      >
        <a href="/" className="logo">
          <SubwayIcon style={{ fontSize: "48px", color: "#3262ff" }} />
          <span>philly transit</span>
        </a>
        <nav>
          <a href="#" className="menu-button" onClick={toggleMenu}>
            <MenuIcon style={{ fontSize: "48px", color: "#000000" }} />
          </a>
          <ul className="nav_links">
            <li>
              <a href="#timeline" onClick={toggleMenu}>
                Timelines
              </a>
            </li>
            <li>
              <a href="#map-section" onClick={toggleMenu}>
                Map
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Style>
  );
};

export default Header;
