import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import OrdSlide from "../components/OrdSlide";
import data from "../data/ord.json";
import og_img from "../../public/og-image.png";

const Landing: NextPage = (props) => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" key="card" />
        <meta name="twitter:site" content="@snounsdao" key="site" />
        <meta property="og:site_name" content="n00uns" key="sitename" />
        <meta property="og:title" content="n00uns soon" key="title" />
        <meta
          property="og:description"
          content="n00unsDAO is an ambitious multi-chain DAO and community proliferating via the @nounsdao protocol and @y00tsNFT"
          key="description"
        />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:image" content={og_img.src} key="image" />
        <meta property="og:image:width" content="1200" key="imagewidth" />
        <meta property="og:image:height" content="630" key="imageheight" />
        <meta property="og:url" content="https://www.n00uns.com" key="url" />
      </Head>
      <main className="w-screen h-screen relative overflow-hidden">
        <div className="w-full h-full flex flex-col items-center mt-2 bg-nuetral">
          <div className="inline-block align-middle">
            <h1 className="text-center text-4xl sm:text-6xl lg:text-7xl xl:text-9xl font-bold font-['Satoshi_Regular'] text-transparent bg-clip-text bg-gradient-to-b from-[#000000] to-[#fffbbc]">
              Blocktoshi Ordinals
            </h1>
          </div>
          <div className="container relative px-8 pt-4 sm:mt-8">
            <OrdSlide ordData={data} />
          </div>

          <span className="mt-2 mb-12 text-xl sm:mb-12 font-['Satoshi_Regular']">
            On Sale Soon
          </span>
          <div className="flex flex-col items-center absolute bottom-5 sm:bottom-20 p-5 mb-10 sm:mb-0">
            <p className="text-xl sm:text-4xl pb-2 font-light font-['Satoshi_Regular'] text-center">
              "A 1/1 pixel collection created by{" "}
              <a
                className="hover:underline"
                href="https://twitter.com/pencilxart"
                target="_blank"
                rel="noreferrer"
              >
                pencilx
              </a>{" "}
              and inscribed on the bitcoin blockchain by{" "}
              <a
                className="hover:underline"
                href="https://twitter.com/thedevkev_"
                target="_blank"
                rel="noreferrer"
              >
                thedevkev_
              </a>{" "}
              "
            </p>
          </div>
        </div>
        <footer className="fixed h-20 bg-white bottom-0 w-full items-center justify-between">
          <ul className="flex items-center justify-center mx-auto text-black space-x-8 content-center p-6">
            <li>
              <a
                href="https://twitter.com/BlocktoshiOrds"
                target="_blank"
                rel="noreferrer"
                aria-label="link to blocktoshi twitter"
                className="mr-4 hover:scale-110 md:mr-6"
              >
                <FaTwitter className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/gkTMD2XUeb"
                target="_blank"
                rel="noreferrer"
                aria-label="link to blocktoshi discord"
                className="mr-4 hover:scale-110 md:mr-6"
              >
                <FaDiscord className="text-3xl" />
              </a>
            </li>
          </ul>
        </footer>
      </main>
    </>
  );
};

export default Landing;
