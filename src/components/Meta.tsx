import Head from "next/head";
import React from "react";

interface MetaProps {
  title: string;
  description?: string;
}

const Meta: React.FC<MetaProps> = ({
  title,
  description = "Philly Transit",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
