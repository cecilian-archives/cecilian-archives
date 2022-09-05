import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";

import Layout70th from "src/components/70th/Layout70th";
import { motion } from "framer-motion";
import StarDivider from "src/components/StarDivider";

const Tickets70th: NextPageWithLayout = () => {
  return (
    <motion.section
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.7, delay: 0.9 }}
      className="w-full bg-archiveBlue-50 p-10 flex flex-col items-center md:py-8 md:max-w-full md:justify-between"
    >
      <div className="w-full max-w-prose mx-auto">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Ticket Prices</h2>
        <p className="py-4 text-lg">
          Tickets for each of the anniversary weekend's events will be available to purchase shortly
          via this site.
        </p>
        <p className="py-4 text-lg">
          In the meantime, here are the prices for each event to aid with advance planning:
        </p>
        <ul className="list-disc px-10 py-4 text-lg">
          <li>Ceilidh - £15</li>
          <li>
            Concert - £12
            <br />
            <span className="text-sm text-gray-600">
              (Note that this is the price to participate in the concert or for a ticket to watch as
              a spectator. Please encourage your friends and family to come and watch too!)
            </span>
          </li>
          <li>Dinner - £40</li>
          <li>Full weekend - £60</li>
        </ul>
      </div>
      <a href="https://www.ceciliansociety.co.uk/archive/gallery/social/Newyr7_jpg" target="_blank">
        <img
          src="https://www.ceciliansociety.co.uk/archive/gallery/social/Newyr7.jpg"
          alt=""
          className="max-w-full lg:max-w-lg my-8 border border-archiveYellow-600 rounded-md transform rotate-3 hover:rotate-2"
        />
      </a>
    </motion.section>
  );
};

Tickets70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Tickets70th;
