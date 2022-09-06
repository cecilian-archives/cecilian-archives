import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

const Tickets70th: NextPageWithLayout = () => {
  return (
    <section className="w-full bg-archiveBlue-50 p-8 flex flex-col items-center md:max-w-full md:justify-between">
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
          <li>Concert - £12</li>
          <li>Dinner - £40</li>
          <li>Full weekend - £60</li>
        </ul>
        <p className="py-4 text-lg">
          Note that the price of the concert applies whether you wish to participate as a performer
          or simply watch and enjoy. Please encourage your friends and family to come and watch too!
        </p>
        <p className="py-4 text-lg">
          Plus ones are more than welcome at each event, and especially so at the dinner.
        </p>
      </div>
      <a href="/images/Popstars.jpg" target="_blank">
        <img
          src="/images/Popstars.jpg"
          alt=""
          className="max-w-full lg:max-w-lg my-8 border border-archiveYellow-600 rounded-md transform transition-transform rotate-3 hover:rotate-2"
        />
      </a>
    </section>
  );
};

Tickets70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Tickets70th;
