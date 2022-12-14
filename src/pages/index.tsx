import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AboutBlock, { AboutBlockInterface } from "../components/AboutBlock";
import Banner, { BannerInterface } from "../components/Banner";
import MenuBlock, { MenuBlockInterface, MenuItemInterface } from "../components/MenuBlock";
import Services, { ServiceItemInterface, ServicesBlockInterface } from "../components/Services";
import TeamBlock, { TeamBlockInterface, TeamItemInterface } from "../components/TeamBlock";

interface Props {
  banner_content: BannerInterface;
  servicesBlock: ServicesBlockInterface;
  services: ServiceItemInterface[];
  aboutBlock: AboutBlockInterface;
  menuBlock: MenuBlockInterface;
  menu: MenuItemInterface[];
  teamBlock: TeamBlockInterface;
  team: TeamItemInterface[];
}

const Home: NextPage<Props> = ({
  banner_content,
  services,
  servicesBlock,
  aboutBlock,
  menuBlock,
  menu,
  teamBlock,
  team,
}) => {
  return (
    <>
      <Head>
        <title>Restoran</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner banner_content={banner_content} />

      <Services services={services} servicesBlock={servicesBlock} />

      <AboutBlock aboutBlock={aboutBlock} />

      <MenuBlock menuBlock={menuBlock} menu={menu} />

      <TeamBlock teamBlock={teamBlock} team={team} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const bannerRes = await fetch("http://localhost:5001/banner_content");
  const banner_content: BannerInterface = await bannerRes.json();

  const servicesRes = await fetch("http://localhost:5001/services");
  const services: ServiceItemInterface[] = await servicesRes.json();

  const servicesBlockRes = await fetch("http://localhost:5001/services_block");
  const servicesBlock: ServicesBlockInterface = await servicesBlockRes.json();

  const aboutBlockRes = await fetch("http://localhost:5001/about_block");
  const aboutBlock: AboutBlockInterface = await aboutBlockRes.json();

  const menuBlockRes = await fetch("http://localhost:5001/menu_block");
  const menuBlock: MenuBlockInterface = await menuBlockRes.json();

  const menuRes = await fetch("http://localhost:5001/menu");
  const menu: MenuItemInterface[] = await menuRes.json();

  const teamBlockRes = await fetch("http://localhost:5001/team_block");
  const teamBlock: TeamBlockInterface = await teamBlockRes.json();

  const teamRes = await fetch("http://localhost:5001/team");
  const team: TeamItemInterface[] = await teamRes.json();

  return {
    props: {
      banner_content,
      services,
      servicesBlock,
      aboutBlock,
      menuBlock,
      menu,
      teamBlock,
      team,
    },
  };
};

export default Home;
