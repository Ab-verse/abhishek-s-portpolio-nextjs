import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import {
  BsFillMoonStarsFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";
import { useState } from "react";
import abhi from "../public/Ab-pic.png";

import Image from "next/image";
import web1 from "../public/ReactLogo.png";
import web2 from "../public/Solidity-logo.png";
import web4 from "../public/Hardhat-logo.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ab-verse Portpolio App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl hover:text-teal-900">Ab!</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Abhishek S
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web3 Full Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Web3 full-stack developer skilled in DApp development, blockchain
              integration, and intuitive front-end design for seamless user
              experiences.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/abverse_?s=21&t=hiFHT2m3wgbhS1Jkw53EuA" target="_blank">
                <AiFillTwitterCircle className=" hover:text-teal-900"  />
              </a>
              <a href="https://in.linkedin.com/in/abhishek-s-ckm" target="_blank">
                <AiFillLinkedin className=" hover:text-teal-900" />
              </a>
              <a href="https://github.com/Ab-verse" target="_blank">
                <AiFillGithub className=" hover:text-teal-900" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={abhi} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className=" mb-12">
            <h3 className="text-3xl py-1 dark:text-white ">About</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome! As a Web3 enthusiast, I thrive on building decentralized
              applications (DApps) that leverage{" "}
              <span className="text-teal-500">blockchain</span> technology to
              create secure, transparent, and innovative solutions. From writing
              efficient <span className="text-teal-500">smart contracts</span>{" "}
              to designing intuitive user interfaces, I'm dedicated to
              delivering seamless experiences that push the boundaries of the
              decentralized web. Along the way, I have collaborated with
              talented individuals to create{" "}
              <span className="text-teal-500">Web3 products</span> for both
              business and consumer use. Let's work together to shape the future
              of the decentralized ecosystem and bring transformative ideas to
              life.
            </p>
          </div>
        </section>
        <section>
          <div className=" mb-12">
            <h3 className="text-3xl py-1 dark:text-white ">Experience</h3>
            <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              <ul>
                <li className="py-1 font-bold text-teal-500 hover:text-teal-600 ">
                  Ascendion (2021 - Present){" "}
                </li>
                <li>
                  <p className=" font-bold">
                    Role: Blockchain Full Stack Developer
                  </p>
                </li>
                <li>
                  Developed{" "}
                  <span className=" text-teal-500"> Circle NFT Badge</span>, a
                  project utilizing Hyperledger Fabric, Node.js, React, and
                  Tailwind CSS to award unique NFT badges to employees based on
                  their mastery levels within circles.
                </li>
                <li>
                  Contributed to{" "}
                  <span className=" text-teal-500"> Decentra-Realm</span>, a
                  Web3 Hotel Booking DApp project using Solidity, Hardhat,
                  Polygon, and React.
                </li>
                <li>
                  Led and trained a team on blockchain development, fostering a
                  collaborative and knowledgeable environment.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Personal Projects
            </h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={web4} width={100} height={100} />

              <h3 className="text-lg font-medium pt-8 pb-2  text-teal-700 hover:text-teal-900">
                <a href="https://github.com/Ab-verse/raffle-dapp-hardhat-nextjs.git" target="_blank">Raffle DApp <BsFillArrowUpRightCircleFill className=" inline-block " /></a>
              </h3>
              <p className="py-2 mb-12">
                "Raffle" is a decentralized application (DApp) using Chainlink
                VRF for fair and transparent random winner selection.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">Solidity</p>
              <p className="text-gray-800 py-1">ChainLink</p>
              <p className="text-gray-800 py-1">Hardhat</p>
              <p className="text-gray-800 py-1">NextJS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className=" object-cover"
                src={web2}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2  text-teal-700 hover:text-teal-900">
                <a href="https://github.com/Ab-verse/moraland-nft-dapp-hardhat.git" target="_blank">Moraland DApp <BsFillArrowUpRightCircleFill className=" inline-block" /></a>
              </h3>
              <p className="py-2">
                "Moraland" is a decentralized application (DApp) that utilizes
                blockchain technology to enable plot claiming and interactive
                map management for a virtual world.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">Solidity, YUL</p>
              <p className="text-gray-800 py-1">OpenZeppelin</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className=" object-center"
                src={web1}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2  text-teal-700 hover:text-teal-900">
                <a href="https://github.com/Ab-verse/crowd-funding-dapp-hardhat-reactjs.git" target="_blank">Crowd Funding DApp <BsFillArrowUpRightCircleFill className=" inline-block" /></a>
              </h3>
              <p className="py-2">
                The "CrowdFunding" decentralized application (DApp) for
                creating, donating to, and tracking multiple fundraising
                campaigns with dynamic targets and deadlines.
              </p>
              <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
              <p className="text-gray-800 py-1">Solidity</p>
              <p className="text-gray-800 py-1">Hardhat</p>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">Tailwind</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
