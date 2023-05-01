import Header from "@/components/Header";
import Meta from "@/components/Meta";
import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import BackToTopButton from "@/components/BackToTopButton";

const Style = styled.div`
  .background {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #e6e6e6;
  }

  .odd {
    background-color: white;
  }

  .description-container {
    text-align: center;
    background-color: #466adf;
    padding: 2rem 0;
    color: white;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 0;
    align-items: center;
    color: var(--dark-text-color);
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    width: 80%;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    flex: 1.5;
  }

  .text-container h1 {
    font-size: 2rem;
  }

  .text-container p {
    width: 100%;
  }

  .description {
    font-size: 1rem;
    font-weight: 400;
    width: 50%;
    margin: 0 auto;
  }

  .image-container {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
  }

  .image {
    width: 100%;
    max-width: 1000px;
    object-fit: cover;
    object-position: center;
  }

  .image-2 {
    width: 20%;
    max-width: 500px;
  }

  .image-3 {
    width: 30%;
    max-width: 1200px;
  }

  .more-images {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
  }

  .new-section {
    padding: 3rem 0;
  }

  @media screen and (max-width: 1000px) {
    .container {
      flex-direction: column;
      gap: 2rem;
    }

    .text-container {
      flex: 1;
    }

    .image-container {
      flex: 1;
    }

    .image {
      width: 100%;
      max-width: 1000px;
      object-fit: cover;
      object-position: center;
    }

    .image-2 {
      width: 100%;
      max-width: 500px;
    }

    .image-3 {
      width: 100%;
      max-width: 1200px;
    }

    .more-images {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

const Proposals = () => {
  return (
    <Style>
      <Meta title="Plan Proposals" />
      <Header fixed />
      <div className="background odd" style={{ marginTop: "4rem" }}>
        <div className="description-container">
          <h1 className="title">Plan Proposals</h1>
          <p className="description">
            Have you ever woken up to a long commute and wish things were
            easier? Maybe a station nearby, or a bus route just oustide your
            house that took you where you needed to go? Here are a list of
            proposals that could have done just that but unfortunately, are only
            a thought of the past.
          </p>
        </div>
        <section className="section">
          <div className="container">
            <div className="text-container">
              <h1 style={{ color: "#ff7b00" }}>
                Broad Street Line Roosevelt Boulevard Extension
              </h1>
              <p>
                The Roosevelt Boulevard Extension was first proposed by the
                commissioner of the Department of City Transit, A. Merrit
                Taylor, in July 1912. The plan would allow service to the
                city&apos;s northeastern suburbs including, Frankford, Mayfair,
                Rhawnhurts, Bustleton, and Parkwood. The original plan was
                approved and work began in 1914 up until a lack of funds and war
                caused a halt on work. It would take another three decades for
                the plan to be spoken about once again. The plan was revised to
                go further northeast branching off from Broad St just north of
                Erie Station. After residents saw the plans for the line, an
                outrage was made objecting &quot;that it would bring
                undesirables to the area.&quot; This plan was since then
                scrapped and replaced for a parking lot at Fern Rock
                Transporation Center. Later in the 1960s, the plan was spoken of
                again. Work had been done in anticipation of the new line and as
                a result, a station was built under Adam&apos;s Ave and the
                Boulevard.
              </p>
            </div>
            <div className="image-container">
              <img className="image" src="images/blvdmap.png" alt="" />
            </div>
          </div>
          <div className="more-images">
            <Image
              width={500}
              height={200}
              className="image-2"
              src="/images/blvd.jpg"
              alt="blvd1"
            />
            <img className="image-2" src="/images/blvd2.jpg" alt="blvd2" />
            <img className="image-2" src="images/blvd3.jpg" alt="blvd3" />
          </div>
        </section>
      </div>
      <div className="background new-section">
        <section className="section">
          <div className="container">
            <div className="text-container">
              <h1 style={{ color: "#ff2600" }}>
                King of Prussia Norristown HSL Extension
              </h1>
              <p>
                King of Prussia&apos;s Business Improvement District(BID) has
                been erected for over a decade now. This erection of the BID
                sparked the revival of on of SEPTA&apos;s 50 year old proposals
                for a rail extension. The cost had grown to $3.02 billion as of
                last year, and due to funding issues, the proposal had been
                canceled.
              </p>
            </div>
            <div className="image-container">
              <img className="image" src="images/norrist.jpg" alt="" />
            </div>
          </div>
          <div className="more-images">
            <Image
              width={400}
              height={300}
              src="/images/norrit2.jpg"
              alt="norrist2"
            />
            <img className="image-3" src="images/norrist3.jpg" alt="norrist3" />
          </div>
        </section>
      </div>
      <div className="background new-section odd">
        <section className="section">
          <div className="container">
            <div className="text-container">
              <h1 style={{ color: "#4d973c" }}>Trolley Makeover</h1>
              <p>
                SEPTA is aware of some of the improvements that will be included
                in the $1.8 billion budget. In May, it issued a request for
                proposals (RFP) for longer trolley cars with higher capacity.
                Additionally, SEPTA plans to renovate its current underground
                stations, create new on-street platforms, and ensure that the
                entire transportation system is accessible for individuals with
                disabilities. SEPTA is contemplating the expansion of some of
                its trolley lines to facilitate smoother transfers for
                commuters, even though this is not included in the survey
                questions. The proposed expansion includes a potential new
                section of Route 102 linking Sharon Hill to Darby, as well as an
                extension of Route 15, which would allow riders to connect
                directly to the Market-Frankford Line. Additionally, SEPTA has
                recently concluded the contract for the procurement of new,
                contemporary trolley cars that comply fully with the Americans
                with Disabilities Act (ADA) guidelines. These new trolleys will
                replace the entire aging fleet of trolley vehicles in the
                mass-transit system. The manufacturer of these new vehicles will
                be Alstom Transportation Inc. According to SEPTA, these modern
                trolleys will revolutionize the largest trolley network in the
                country by making it more accessible, efficient, and
                user-friendly.
              </p>
            </div>
            <div className="image-container">
              <Image
                width={600}
                height={300}
                className="image"
                src="/images/trolley0.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="more-images">
            <Image
              width={400}
              height={300}
              src="/images/trolley1.png"
              alt="trolley1"
            />
            <img className="image-3" src="images/trolley2.jpg" alt="norrist3" />
          </div>
        </section>
      </div>
      <BackToTopButton />
    </Style>
  );
};

export default Proposals;
