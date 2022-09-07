import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import ButtonLink from "src/components/ButtonLink";
import StarDivider from "src/components/StarDivider";

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
          <li>
            Ceilidh: <b>£15</b>
          </li>
          <li>
            Concert: <b>£12</b>
          </li>
          <li>
            Dinner: <b>£40</b>
          </li>
          <li>
            Full weekend (ceilidh, concert and dinner): <b>£60</b>
          </li>
        </ul>
        <p className="py-4 text-lg">
          Note that the price of the concert applies whether you wish to participate as a performer
          or simply watch and enjoy. Please encourage your friends and family to come and watch too!
        </p>
        <p className="py-4 text-lg">
          Plus ones are more than welcome at each event, and especially so at the dinner.
        </p>

        <StarDivider bgClass="bg-archiveBlue-50" />

        <h3 className="text-gray-900 text-3xl pt-4 pb-2">Accommodation</h3>
        <p className="py-4 text-lg">
          If you've moved away from the area and would like to make a head start on where to stay
          for your trip, our venue for Sunday's dinner, the{" "}
          <a
            href="https://www.gghotel.co.uk/"
            target="_blank"
            className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
          >
            Glasgow Grosvenor Hotel
          </a>
          , have offered us a <b>10% discount</b> on their bed and breakfast advance purchase rate.
        </p>
        <ButtonLink
          to="https://direct-book.com/properties/glasgowgrosvenor?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2022-10-21&checkOutDate=2022-10-24&promocode=GRP_EVE&trackPage=no"
          target="_blank"
        >
          Claim the Discount
        </ButtonLink>
        <p className="py-4 text-lg">
          To take advantage of this rate, simply book using the button above at least 21 days before
          arrival.
        </p>

        <StarDivider bgClass="bg-archiveBlue-50" />
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
