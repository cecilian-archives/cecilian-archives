import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import ButtonLink from "src/components/ButtonLink";
import StarDivider from "src/components/StarDivider";
import Link from "next/link";

const Schedule70th: NextPageWithLayout = () => {
  return (
    <>
      <section className="w-full bg-archiveBlue-50 p-8">
        <div className="w-full max-w-screen-sm mx-auto flex flex-col items-start justify-center">
          <h2 className="text-gray-900 text-4xl pt-4 pb-2 max-w-prose">
            Let the celebrations begin!
          </h2>
          <p className="text-lg py-2 max-w-prose">
            The 70th anniversary weekend is <b>this weekend</b> and we hope you're as excited as we
            are! Read on for some of the finer details of what's happening when.
          </p>
        </div>
      </section>

      <section className="w-full bg-archiveYellow-50 p-8">
        <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center justify-center">
          <h2 className="text-gray-900 text-4xl pt-4 pb-2 self-start md:self-auto">
            Event Timings
          </h2>

          <div className="w-full py-4 flex flex-col justify-center items-start">
            <div className="max-w-prose text-left">
              <h3 className="text-gray-900 text-3xl pt-4 pb-2">Ceilidh</h3>
              <p className="text-lg py-2 italic">Friday 21st October, 7:30pm–midnight</p>
              <p className="text-lg py-2">
                Don't forget that a buffet will be served during an appropriate break in the
                dancin'.
              </p>
              <p className="text-lg py-2">
                <b>Location</b>:{" "}
                <a
                  href="https://goo.gl/maps/c71PgSRzwRJ6i1Py6"
                  target="_blank"
                  className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
                >
                  National Piping Centre, 30-34 McPhater Street, Cowcaddens G4 0HW
                </a>
              </p>
              <p className="text-lg py-2">
                <b>Dress Code</b>: just traditional ceilidh-wear, nothing excessively formal,
                something you can dance in
              </p>
            </div>
          </div>

          <StarDivider />

          <div className="w-full py-4 flex flex-col justify-center items-start">
            <div className="max-w-prose text-left">
              <h3 className="text-gray-900 text-3xl pt-4">Concert</h3>
              <h4 className="text-gray-700 text-base pb-2">for audience members</h4>
              <p className="text-lg py-2 italic">Saturday 22nd October, 7:30pm–10:00pm</p>
              <p className="text-lg py-2">
                Doors for the concert will open at 7pm, and we will be staying in the venue until
                1am
              </p>
              <p className="text-lg py-2">
                <b>Location</b>:{" "}
                <a
                  href="https://goo.gl/maps/Y3CTX9XzyLRvFAT88"
                  target="_blank"
                  className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
                >
                  Glasgow University Union, 32 University Avenue, G12 8LX
                </a>
              </p>
              <p className="text-lg py-2">
                For the avoidance of doubt, there is no dress code for audience members!
              </p>

              <h3 className="text-gray-900 text-3xl pt-4 mt-2">Concert</h3>
              <h4 className="text-gray-700 text-base pb-2">for participants</h4>
              <p className="text-lg py-2">
                Rehearsals for the concert will take place across the University of Glasgow's
                Gilmorehill campus, and around Byres Road, over{" "}
                <i>Friday 21st and Saturday 22nd October</i>.
              </p>
              <p className="text-lg py-2">
                More information on locations, timings and how rehearsals will work is detailed on a
                separate page.
              </p>
              <div className="w-full flex items-center justify-start">
                <ButtonLink
                  to="/70th/concert/schedule"
                  variant="solid"
                  colour="primary"
                  className="mb-3"
                >
                  Concert Rehearsal Schedules
                </ButtonLink>
              </div>
            </div>
          </div>

          <StarDivider />

          <div className="w-full py-4 flex flex-col justify-center items-start">
            <div className="max-w-prose text-left">
              <h3 className="text-gray-900 text-3xl pt-4 pb-2">Dinner</h3>
              <p className="text-lg py-2 italic">Sunday 23rd October, 7:00pm–1:00am</p>
              <p className="text-lg py-2">
                The arrival drinks reception is from 7pm, and guests will be seated from 7:30pm.
                Following dinner, we invite you to dance the night away!
              </p>
              <p className="text-lg py-2">
                <b>Location</b>:{" "}
                <a
                  href="https://goo.gl/maps/6c1eENJFPp95s89x9"
                  target="_blank"
                  className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
                >
                  Glasgow Grosvenor Hotel, 1-9 Grosvenor Terrace, G12 0TA
                </a>
              </p>
              <p className="text-lg py-2">
                <b>Dress Code</b>: black tie. Suitably formal attire to round off the celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-archiveBlue-50 p-8">
        <div className="w-full max-w-screen-sm mx-auto flex flex-col items-start justify-center">
          <h2 className="text-gray-900 text-4xl pt-4 pb-2 max-w-prose">Tickets</h2>
          <p className="text-lg py-2 max-w-prose">
            Tickets for the ceilidh and the concert will be available on the door for both events,
            and are also still{" "}
            <Link href="/dash/orders/new">
              <a className="underline text-archiveBlue-600 hover:text-archiveBlue-400">
                available online
              </a>
            </Link>
            . Please note cash is preferable if you plan to buy door tickets!
          </p>
          <p className="text-lg pt-2 pb-4 max-w-prose">
            There are no physical tickets for the 70th anniversary events. Front of House will have
            a door list of names, but if you'd like a reminder of what you have bought (or something
            to show us on the door) you can view your orders by logging in.
          </p>
          <div className="w-full flex items-center justify-start max-w-prose">
            <ButtonLink to="/dash/orders" variant="solid" colour="primary" className="mb-6">
              Your Tickets
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="w-full bg-archiveYellow-50 p-8">
        <div className="w-full max-w-screen-sm mx-auto flex flex-col items-center justify-center">
          <h2 className="text-gray-900 text-3xl pt-4 pb-2 max-w-prose">
            Any outstanding questions?
          </h2>
          <div className="w-full flex items-center justify-center max-w-prose">
            <ButtonLink to="/70th/contact" variant="solid" colour="secondary" className="mb-6">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
};

Schedule70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Schedule70th;
