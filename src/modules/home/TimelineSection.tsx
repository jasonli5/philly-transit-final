import TimelineCard from "@/components/TimelineCard";
import styled from "@emotion/styled";

const Style = styled.div`
  .timeline-home-section {
    background-color: var(--dark-text-color);
    /* Offset anchor href for header */
    padding-top: 80px;
    margin-top: -80px;
  }

  .timeline-home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    margin: 0 auto;
    max-width: 80%;
    height: 100%;
  }

  .timeline-home-heading {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  .timeline-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding-bottom: 3.5rem;
    height: 100%;
    gap: 2rem;
  }
`;

export const TimelineSection = () => {
  return (
    <Style>
      <section className="timeline-home-section" id="timeline">
        <div className="timeline-home-container">
          <h1 className="timeline-home-heading" id="timeline-home-heading">
            Timelines
          </h1>
          <div className="timeline-cards">
            <TimelineCard
              title="Broad Street Line"
              image="/images/bsl.jpg"
              link="/bsl-timeline"
            />
            <TimelineCard
              title="Market-Frankford Line"
              image="/images/mfl.jpg"
              link="/mfl-timeline"
            />
            <TimelineCard
              title="Trolleys"
              image="/images/trolley.jpg"
              link="/trolley-timeline"
            />
          </div>
        </div>
      </section>
    </Style>
  );
};

export default TimelineSection;
