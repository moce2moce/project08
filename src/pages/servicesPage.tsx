import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Breadcrumbs from "../components/Breadcrumbs";
import Services, { ServiceItemInterface, ServicesBlockInterface } from "../components/Services";

interface Props {
  servicesBlock: ServicesBlockInterface;
  services: ServiceItemInterface[];
}

const ServicesPage: NextPage<Props> = ({ services, servicesBlock }) => {
  return (
    <>
      <Head>
        <title>ServicesPage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Breadcrumbs title="Services" />

      <Services services={services} servicesBlock={servicesBlock} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const servicesRes = await fetch("http://localhost:5001/services");
  const services: ServiceItemInterface[] = await servicesRes.json();

  const servicesBlockRes = await fetch("http://localhost:5001/services_block");
  const servicesBlock: ServicesBlockInterface = await servicesBlockRes.json();

  return {
    props: {
      services,
      servicesBlock,
    },
  };
};

export default ServicesPage;
