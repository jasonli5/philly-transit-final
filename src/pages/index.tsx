import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import LandingSection from "@/modules/home/LandingSection";
import TimelineSection from "@/modules/home/TimelineSection";
import MapSection from "@/modules/home/MapSection";
import Meta from "@/components/Meta";
import Footer from "@/components/Footer";

const Style = styled.div``;

export default function Home() {
  return (
    <Style>
      <Meta title="Philly Transit" />
      <Header />
      <LandingSection />
      <TimelineSection />
      <MapSection />
      <Footer />
    </Style>
  );
}
