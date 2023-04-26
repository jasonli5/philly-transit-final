import React from "react";
import Header from "@/components/Header";
import Timeline from "@/modules/timeline/Timeline";

const content = [
  {
    year: "1900s",
    description:
      "In 1907, the Market Street El was opened from 69th St to 15th St. One year later, the line was extended eastward to 2nd St through an underground portal at 13th St. The extention would turn onto Chestnut St. Later, another extention was made to South St.",
    image: { src: "/images/mfl1900.jpeg", alt: "MFL in 1900" },
  },
  {
    year: "1920s",
    description:
      "Later in 1922, a second branch of the Market St El was erected north of 2nd St to Bridge-Prat becomming the Frankford El.",
    image: { src: "/images/mfl1920.jpeg", alt: "MFL in 1920" },
  },
  {
    year: "1950s",
    description:
      "During construction in 1955, 36th, and 34th Sts were closed and reopened. 40th, 36th and 32nd Sts were replaced with underground stations 40th, 34th and 30th Sts. One year later, skip stop operations were implemented.",
    image: { src: "/images/mfl1950.jpg", alt: "MFL in 1950" },
  },
  {
    year: "1970s",
    description:
      "In 1977, Market-Frankford's Fairmount Station was closed due to the construction of the I-95 and later replaced with its current successor Spring Garden Station.",
    image: { src: "/images/mfl1970.jpeg", alt: "MFL in 1970" },
  },
  {
    year: "1990s",
    description:
      "13 years later in 1990, 2nd St and Spring Garden switched to all stop stations with 34th St becoming an all stop station in 1994.",
    image: { src: "/images/mfl1990.jpeg", alt: "MFL in 1990" },
  },
  {
    year: "2000s",
    description:
      "Some time later in 2003, Bridge-Pratt Station was rebuilt into Frankford terminal being rebranded as Frankford Transportation Center. Four years later, 46th St becomes an all stop service station.",
    image: { src: "/images/mfl2000.jpeg", alt: "MFL in 2000" },
  },
  {
    year: "2010s",
    description:
      "The 2010's was a time of renaming and rebranding. In 2010, 13th/Juniper was renamed simply to 13th St Station with 5th St Station being renamed to Independence Hall in 2015. Three years later, Margaret-Orthodox was renamed to Arrot Transportation Center.",
    image: { src: "/images/mfl2010.jpg", alt: "MFL in 2010" },
  },
  {
    year: "2020s",
    description:
      "Two years later in 2020, skip stop service was eliminated from the system.",
    image: { src: "/images/mfl2020.jpeg", alt: "MFL in 2020" },
  },
];

export const MFLTimeline = () => {
  return (
    <React.Fragment>
      <Header fixed />
      <Timeline
        title="The history of Market-Frankford Line"
        description="The Market-Frankford Line is an elevated and underground subway line that connects Northeast and West Philadelphia to Center City Philadelphia through Market St, Front St, Kensington Ave, and Frankford Ave."
        content={content}
        lineColor="#0044ff"
      />
    </React.Fragment>
  );
};

export default MFLTimeline;
