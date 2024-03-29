import type { NextPage } from "next";

import { motion } from "framer-motion";
import useConfetti from "src/utils/useConfetti";
import ImageFader from "src/components/ImageFader";
import ButtonLink from "src/components/ButtonLink";

const Home: NextPage = () => {
  const fireConfetti = useConfetti();

  return (
    <div className="relative w-screen min-h-screen">
      <ImageFader />

      <main className="absolute inset-0 flex flex-col justify-center items-center p-8 border-b-8 border-archiveYellow-500 bg-hero-gradient">
        <motion.section
          animate={{ y: ["7%", "0%"], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center items-center"
        >
          <button type="button" onClick={fireConfetti}>
            <img
              src="/images/logo.svg"
              alt=""
              className="w-auto max-h-14 border border-archiveBlue-700 rounded-xl mt-8 md:mt-0"
            />
          </button>
          <div className="text-center text-white p-8">
            <h2 className="text-4xl border-b border-archiveYellow-500 pb-4">Welcome to the</h2>
            <h1 className="text-7xl pt-3">Cecilian Archives</h1>
          </div>
        </motion.section>

        <motion.section
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
          <ButtonLink to="/70th" className="mt-8" variant="solid" colour="secondary">
            View the 70th plans
          </ButtonLink>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
