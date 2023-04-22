import NavigationButton from "@/components/NavigationButton";
import styled from "@emotion/styled";

const Style = styled.div`
  main {
    background-color: #1a1a1a;
  }

  .background {
    position: relative;
    clip-path: ellipse(90% 95% at center 0%);
    background-color: white;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
  }

  .background::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(http://localhost:3000/30th.jpg);
    background-size: cover;
    background-position: center 60%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
    opacity: 0.5;
    filter: blur(1px);
    z-index: -1;
    /* animation: backgroundSlide 10s ease infinite forwards; */
  }

  .headline-container {
    color: var(--dark-text-color);
    height: 70%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-top: 5rem;
  }

  .title {
    font-size: 4.5rem;
    line-height: 4rem;
    font-weight: 600;
  }

  .description {
    font-size: 1.25rem;
    width: 50%;
    margin-bottom: 2rem;
  }
`;

export const Landing = () => {
  return (
    <Style>
      <main className="section">
        <div className="background">
          <div className="headline-container">
            <p className="title">Transit through time.</p>
            <p className="description">
              Explore the history of Philadelphia's SEPTA with interactive maps,
              timelines, videos, and more!
            </p>
            <NavigationButton href="#timeline">Explore</NavigationButton>
          </div>
        </div>
      </main>
    </Style>
  );
};

export default Landing;
