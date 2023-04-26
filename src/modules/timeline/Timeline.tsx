import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect } from "react";

const Style = styled.div`
  .timeline-section {
    margin-top: 5rem;
    background-color: #d8d8d8;
  }

  .timeline-container {
    padding: 2rem 1rem;
  }

  .timeline-heading {
    text-align: center;
    margin: 1rem auto 5rem auto;
    width: 70%;
  }

  .timeline-title {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .line {
    border: 10px solid #0044ff;
    position: absolute;
    height: 370vh;
    margin: 0 auto;
    width: 1px;
    border-radius: 12px;
    margin-top: 5rem;
  }

  .timeline-content {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .content {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8rem;
    z-index: 1;
  }

  .content-text {
    color: rgb(34, 34, 34);
    background: white;
    border-radius: 1rem;
    padding: 1rem;
    font-size: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.247);
    display: flex;
    width: 20%;
    flex-direction: column;
  }

  .content-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25rem;
  }

  .even .content-text {
    order: 2;
  }

  .content-image {
    width: 20%;
    height: 100%;
  }

  .content-image .image {
    display: block;
    max-width: 350px;
    max-height: 300px;
    width: auto;
    height: auto;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.247);
  }

  .circle {
    display: inline-block;
    position: absolute;
    margin: 0 auto;
    right: calc(50% - 2rem);
    height: 4rem;
    width: 4rem;
    background-color: white;
    border: 0.75rem solid black;
    border-radius: 2rem;
    top: -2rem;
  }

  @media screen and (max-width: 768px) {
    .timeline-heading {
      width: 100%;
    }

    .content {
      margin-top: 2rem;
      gap: 2rem;
    }

    .content-text {
      width: 100%;
    }

    .content-box {
      flex-direction: column;
      gap: 5rem;
    }

    .content-image {
      width: 100%;
    }

    .circle {
      right: calc(50% - 2rem);
    }

    .even .content-text {
      order: 0;
    }

    .line {
      margin-top: -2rem;
      height: 600vh;
    }
  }
`;

interface TimelineProps {
  title: string;
  description: string;
  content: {
    year: string;
    description: string;
    image: { src: string; alt: string };
  }[];
  lineColor: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  title,
  description,
  content,
  lineColor,
}) => {
  useEffect(() => {
    const height = document.getElementById("container-height")?.offsetHeight;
    console.log(height);
    document.getElementById("line-height")!.style.height = `${height! - 300}px`;
  }, []);

  return (
    <Style>
      <section className="timeline-section">
        <div className="timeline-container" id="container-height">
          <div className="timeline-heading">
            <h1 className="timeline-title">{title}</h1>
            <p className="timeline-description">{description}</p>
          </div>

          <div className="timeline-content">
            <div
              className="line"
              id="line-height"
              style={{
                borderColor: lineColor,
              }}
            >
              <span className="circle"></span>;
            </div>

            <div className="content">
              {content.map((item, index) => {
                return (
                  <div
                    className={`content-box ${index % 2 == 0 ? "even" : ""}`}
                    key={index}
                  >
                    <div className="content-text">
                      <h2 className="content-year">{item.year}</h2>
                      <p>{item.description}</p>
                    </div>
                    <div className="content-image">
                      <Image
                        className="image"
                        src={item.image.src}
                        alt={item.image.alt}
                        width={350}
                        height={300}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Style>
  );
};

export default Timeline;
