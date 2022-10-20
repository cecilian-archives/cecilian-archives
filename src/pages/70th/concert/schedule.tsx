import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import ButtonLink from "src/components/ButtonLink";
import StarDivider from "src/components/StarDivider";

const ConcertSchedule70th: NextPageWithLayout = () => {
  return (
    <>
      <section className="w-full bg-archiveBlue-50 p-8">
        <div className="w-full max-w-screen-sm mx-auto flex flex-col items-start justify-center">
          <h2 className="text-gray-900 text-4xl pt-4 pb-2 max-w-prose">Concert Schedule</h2>
          <h3 className="text-gray-900 text-2xl pt-4 pb-2 max-w-prose">Timings</h3>
          <p className="text-lg py-2 max-w-prose">
            Rehearsals for the concert will take place across the University of Glasgow's
            Gilmorehill campus, and around Byres Road, over{" "}
            <i>Friday 21st and Saturday 22nd October</i>.
          </p>
          <p className="text-lg py-2 max-w-prose">A detailed schedule is below, but broadly:</p>
          <ul className="text-lg list-disc pl-8 pb-1">
            <li>
              Friday will be dedicated to rehearsing numbers that ease the pressure on Saturday's
              schedule. Full chorus rehearsals start from 12:30pm on Friday.
            </li>
            <li>
              Saturday will begin with a full company welcome and warm-up in the GUU Dining Room at
              11am, and following more rehearsals we will come together for a tech/dress run from
              4pm on Saturday afternoon.
            </li>
            <li>
              We will perform to an eager audience from 7:30pm on Saturday evening, and afterwards
              stay to enjoy the atmosphere until 1am.
            </li>
          </ul>
          <h3 className="text-gray-900 text-2xl pt-4 pb-2 max-w-prose">Casting</h3>
          <p className="text-lg py-2 max-w-prose">
            Solo parts in the concert have now been cast, and Concert Director Izzy will have been
            in touch with you directly if this applies.
          </p>
          <div className="w-full flex items-center justify-start max-w-prose">
            <ButtonLink
              to="/70th/concert/setlist"
              variant="solid"
              colour="primary"
              className="mb-3"
            >
              View the Final Setlist
            </ButtonLink>
          </div>
          <p className="text-lg py-2 max-w-prose">
            For full company numbers in the concert, these are being run as <b>open chorus</b>{" "}
            rehearsals over the weekend, beginning at 12:30pm on Friday and 11:00am on Saturday. You
            are free to participate in as many or as few of these as you like, as your own schedule
            and the rehearsal schedule (see below) permit, but are highly encouraged and welcomed to
            participate in as many as you can!
          </p>
          <h3 className="text-gray-900 text-2xl pt-4 pb-2 max-w-prose">Dress Code</h3>
          <p className="text-lg py-2 max-w-prose">
            The dress code for concert participants is what recent Cecilians have come to term 'fun
            blacks'. By this we just mean black clothes which you feel comfortable performing in. It
            doesn't have to be a strict black top and trousers - feel free to think outside the box
            around dungarees, glitter, mesh, sequins etc., as long as it's largely black in colour.
          </p>
          <h3 className="text-gray-900 text-2xl pt-4 pb-2 max-w-prose">What to Bring</h3>
          <p className="text-lg py-2 max-w-prose">
            Mainly just yourself and some water to keep you hydrated! Sheet music will be provided
            on the day, but a pencil to mark it is always useful. Don't forget your concert outfit
            to change into as well. Beyond that, you just need some stamina, a dose of good humour,
            and a sprinkle of Cecilian spirit.
          </p>
        </div>
      </section>

      <section className="w-full bg-archiveYellow-50 p-8">
        <div className="w-full max-w-screen-sm mx-auto flex flex-col items-start justify-center">
          <h2 className="text-gray-900 text-3xl pt-4 pb-2 self-start">
            Detailed Schedule and Locations
          </h2>

          <h3 className="text-gray-900 text-2xl pt-4 pb-2 max-w-prose">Rehearsal Schedule</h3>
          <p className="text-lg py-2 max-w-prose">
            The full rehearsal schedule is provided as a separate document. Please have a read
            (there's a key on the first tab) and figure out what numbers you'd like to attend the
            rehearsals for.
          </p>
          <div className="w-full flex items-center justify-start max-w-prose">
            <ButtonLink
              to="https://docs.google.com/spreadsheets/d/1FJw3k-nPCugq_40QdLaxz5bZsKqddTqpifXisVjxUlY/edit"
              variant="solid"
              colour="secondary"
              target="_blank"
              className="mb-6"
            >
              Open the Rehearsal Schedule
            </ButtonLink>
          </div>
          <p className="text-lg py-2 max-w-prose">
            Remember that numbers in green, labelled with <b>OPEN CHORUS</b> in red, are for anyone
            to participate in.
          </p>

          <StarDivider />

          <h3 className="text-gray-900 text-2xl pt-4 pb-2 max-w-prose">Guide to Locations</h3>
          <p className="text-lg py-2 max-w-prose">
            We're aware that many of the rooms and locations listed on the schedule may be
            unfamiliar, especially if it's been a few years since you ventured off campus for the
            last time! So if you'd find it helpful, here's a bit more detail, including addresses,
            on each of the buildings detailed in the schedule above.
          </p>
          <div className="w-full flex items-center justify-start max-w-prose">
            <ButtonLink
              to="https://docs.google.com/document/d/1TekCZr9WWPmRudfZ8_8BmBex3SjohdGPQ1Zbohw-drY/edit"
              variant="solid"
              colour="secondary"
              target="_blank"
              className="mb-6"
            >
              Read the Location Guide
            </ButtonLink>
          </div>
          <p className="text-lg py-2 max-w-prose">
            The University also has an excellent{" "}
            <a
              href="http://www.gla.ac.uk/locations/"
              target="_blank"
              className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
            >
              Room Finder app
            </a>{" "}
            you can use for all rehearsal rooms (other than{" "}
            <a
              href="https://goo.gl/maps/6i6yrSRMmBgqVivMA"
              target="_blank"
              className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
            >
              Dance Glasgow
            </a>{" "}
            on Ruthven Lane, just off Byres Road).
          </p>
        </div>
      </section>

      <section className="w-full bg-archiveBlue-50 p-8">
        <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center justify-center">
          <h2 className="text-gray-900 text-2xl pt-4 pb-2 text-center max-w-prose">
            We can't wait to see you there!
          </h2>
          <div className="w-full flex items-center justify-center max-w-prose">
            <ButtonLink to="/70th/schedule" variant="solid" colour="primary" className="mb-6">
              Return to Weekend Schedule
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
};

ConcertSchedule70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default ConcertSchedule70th;
