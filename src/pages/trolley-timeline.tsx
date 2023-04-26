import React from "react";
import Header from "@/components/Header";
import Timeline from "@/modules/timeline/Timeline";

const content = [
  {
    year: "1850s",
    description: "In 1859, the first trolley line was opened along Girard Ave.",
    image: { src: "/images/tro1850.jpeg", alt: "Trolley in 1850" },
  },
  {
    year: "1890s",
    description:
      "Over 40 years later, the line was electrified along with the contruction of the first trolley in West Philadelphia opened running for 63rd St to Newtown Square. Four years later, the Newtown trolley Line was extended to West Chester.",
    image: { src: "/images/tro1890.jpeg", alt: "Trolley in 1890" },
  },
  {
    year: "1900s",
    description:
      "Later in 1902, the Girard Trolley Line was extended further more along with a new route from 63rd St to West Elm St. Three years later, that same route would be extended from Elm St to Ardmore Station along with a new center city route from 24th to 15th St. In 1907, Another West Philadelphia route was opened from 63rd to Parker Ave. All West trolley lines would be cut from 63rd St to 69th St. A new trolley would open in replacement.",
    image: { src: "/images/tro1900.png", alt: "Trolley in 1900" },
  },
  {
    year: "1910s",
    description:
      "In 1911, the 63rd to 69th St train was discontinued. Two years later, a new trolley route would open from 69th to Orange St. Four years later, the route ending at Clifton St wuld be extended to Sharon Hill.",
    image: { src: "/images/tro1910.jpeg", alt: "Trolley in 1910" },
  },
  {
    year: "1950",
    description:
      "Several decades later in 1954, the West Chester Trolley Service was cut back to West Gate Hills.",
    image: { src: "/images/tro1950.jpeg", alt: "Trolley in 1950" },
  },
  {
    year: "1960",
    description:
      "One decade later in 1966, the Ardmore Trolley was dicontinued.",
    image: { src: "/images/tro1960.jpeg", alt: "Trolley in 1960" },
  },
  {
    year: "1990s-2000s",
    description:
      'In 1992, the Girard Trolley was "bustituted" only to be brought back  in 2005 with full trolley service.',
    image: { src: "/images/tro2000.jpeg", alt: "Trolley in 2000" },
  },
];

export const TrolleyTimeline = () => {
  return (
    <React.Fragment>
      <Header fixed />
      <Timeline
        title="The history of Trolley Lines"
        description="The Trolley Lines are a system of streetrail lines that run throughout the city. Starting in the late 1850's along Girard Ave, the system of lines have grown especially in West Philadelphia."
        content={content}
        lineColor="#007e1b"
      />
    </React.Fragment>
  );
};

export default TrolleyTimeline;
