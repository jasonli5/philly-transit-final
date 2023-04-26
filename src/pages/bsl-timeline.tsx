import React from "react";
import Header from "@/components/Header";
import Timeline from "@/modules/timeline/Timeline";
import Meta from "@/components/Meta";

const content = [
  {
    year: "1920s",
    description:
      "The Broad Street Line begins service in 1928 servicing from Olney Avenue to Market Street. Later in 1929, Fairmount station was opened. In 1930, Broad Street Line service was extended to Lombard-South.",
    image: { src: "/images/bsl1920.jpeg", alt: "BSL in 1920" },
  },
  {
    year: "1930s",
    description:
      "Later in 1932, a spur was erected leading to 8th and Market, with stations Spring Garden and Race-Vine between. The Broad Street Line was once more extended to Snyder Ave in 1938.",
    image: { src: "/images/bsl1930.jpeg", alt: "BSL in 1930" },
  },
  {
    year: "1940s",
    description:
      "In 1949, the Broad-Ridge Spur was extended to City Hall Station, Camden and Broadway Station, Canden via the Ben Franklin Bridge.",
    image: { src: "/images/bsl1940.jpeg", alt: "BSL in 1940" },
  },
  {
    year: "1950s",
    description:
      "During 1952, Franklin Square Station was reopened on the Broad-Ridge Spur after being closed on the Bridge Line. One year later, the Spur was reduced back to 8th and Market for the reopening of the Bridge Line.",
    image: { src: "/images/bsl1950.jpeg", alt: "BSL in 1950" },
  },
  {
    year: "1950s",
    description:
      "In 1956, the line was extended northward to Fernrock Transportation Center. In 1959, the Broad Street Line received express tracks between Erie Avenue and South Street. Additionally, the Ridge-Line was extended to Erie Station.",

    image: { src: "/images/bsl1960.jpeg", alt: "BSL in 1960" },
  },
  {
    year: "1970s",
    description:
      "The Broad Street Line was extended two stations south to Pattison Station in 1973.",
    image: { src: "/images/bsl1970.jpeg", alt: "BSL in 1970" },
  },
  {
    year: "1980s",
    description:
      "Ten years later in 1983, express service was extended to Olney Station. That same year, the Ridge Line's Race-Vine Station was renamed to Chinatown Station. Two years later, the Ridge Line's Spring Garden was closed.",
    image: { src: "/images/bsl1980.jpeg", alt: "BSL in 1980" },
  },
  {
    year: "1990s",
    description:
      "In 1992, the Ridge Line was extended to Olney and becomes express station exclusive. Later that year, service returns to all stops and is extended to Fernrock. Five years later, Ridge service returns to express service while stopping at North Philadelphia.",
    image: { src: "/images/bsl1990.jpeg", alt: "BSL in 1990" },
  },
  {
    year: "2000s",
    description:
      "Pattison Station was renamed to AT&T due to a sponsorship in 2010. Eight years later, AT&T was renamed to NRG due to a change in sponsorships.",
    image: { src: "/images/bsl2000.jpeg", alt: "BSL in 2000" },
  },
];

export const BSLTimeline = () => {
  return (
    <React.Fragment>
      <Meta title="Broad Street Line Timeline" />
      <Header fixed />
      <Timeline
        title="The history of Broad Street Line"
        description="The Broad Street Line is an underground subway line that connects
            North and South Philadelphia through Broad Street."
        content={content}
        lineColor="#ff7b00"
      />
    </React.Fragment>
  );
};

export default BSLTimeline;
