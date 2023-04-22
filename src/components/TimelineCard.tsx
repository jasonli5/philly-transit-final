import styled from "@emotion/styled";
import Link from "next/link";

const Style = styled.div`
  .timeline-card {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    width: 20rem;
    height: 20rem;
    background-color: white;
    border-radius: 0.9rem;
    text-decoration: none;
    color: var(--dark-text-color);
    transition: 0.3s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    gap: 2rem;
  }

  .timeline-card:hover {
    transform: scale(1.02);
  }

  .timeline-card-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    vertical-align: middle;
    border-radius: 0.9rem 0.9rem 0 0;
  }
`;

interface TimelineCardProps {
  title: string;
  image: string;
  link: string;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  image,
  link,
}) => {
  return (
    <Style>
      <Link href={link} className="timeline-card">
        <div className="timeline-card-image">
          <img src={image} />
        </div>
        <h2>{title}</h2>
      </Link>
    </Style>
  );
};

export default TimelineCard;
