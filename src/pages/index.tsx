import type { NextPage } from "next";

import { motion } from "framer-motion";
import useConfetti from "../utils/useConfetti";
import ImageFader from "../components/ImageFader";
import ButtonLink from "../components/ButtonLink";

const Home: NextPage = () => {
  const fireConfetti = useConfetti();

  return (
    <main className="relative w-screen min-h-screen">
      <ImageFader />

      <div className="absolute inset-0 flex flex-col justify-center items-center p-8 border-b-8 border-archiveYellow-500 bg-hero-gradient">
        <motion.div
          animate={{ y: ["7%", "0%"], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center items-center"
        >
          <img
            src="/images/logo.svg"
            alt=""
            onClick={fireConfetti}
            className="w-auto max-h-14 border border-deepBlue-105 rounded-xl mt-8 md:mt-0"
          />
          <div className="text-center text-white p-8">
            <h2 className="text-4xl border-b border-archiveYellow-500 pb-4">Welcome to the</h2>
            <h1 className="text-7xl pt-3">Cecilian Archives</h1>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="p-8 flex-grow-0 flex flex-col items-center md:py-8 md:px-0 md:max-w-full md:justify-between"
        >
          <p className="text-center text-white text-lg">
            The Archives will soon be open for browsing.
          </p>
          <p className="text-center text-white text-lg">
            But right now, the 70th Anniversary celebrations are taking shape!
          </p>
          <ButtonLink className="mt-8" onClick={() => {}} variant="solid" colour="secondary">
            View the 70th plans
          </ButtonLink>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
