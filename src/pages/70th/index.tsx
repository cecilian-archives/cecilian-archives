import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import ButtonLink from "src/components/ButtonLink";
import StarDivider from "src/components/StarDivider";

const Home70th: NextPageWithLayout = () => {
  return (
    <>
      <section className="w-full bg-archiveBlue-50 p-8 px-2 flex flex-col items-center md:max-w-full md:justify-between">
        <div className="max-w-prose mx-4">
          <h2 className="text-gray-900 text-4xl text-center pt-4 pb-2">
            Let the celebrations begin!
          </h2>
          <p className="text-center text-lg py-4">
            Founded on 18th October 1952, the Cecilian Society marks its 70th anniversary this year,
            and we're planning a weekend of celebrations that we'd love you to get involved with.
          </p>
          <p className="text-center text-lg py-4">
            The anniversary celebrations will be held over the weekend of{" "}
            <b>Friday 21st to Sunday 23rd October 2022</b>. Read on for more details of what's
            planned on each day, and how to take part.
          </p>
        </div>
      </section>

      <section className="w-full bg-archiveYellow-50 p-8">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-gray-900 text-4xl text-center pt-4 pb-2">Running Order</h2>

          <div className="w-full py-4 md:px-12 flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-prose">
              <h3 className="text-gray-900 text-3xl text-left pt-4 pb-2">Friday 21st October</h3>
              <p className="text-left text-lg py-4">
                Our first day will open with <b>daytime concert rehearsals</b> (for those who are
                available) and will end with our <b>evening Welcome and Birthday Ceilidh</b> in the{" "}
                <a
                  href="https://goo.gl/maps/c71PgSRzwRJ6i1Py6"
                  target="_blank"
                  className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
                >
                  National Piping Centre
                </a>
                , complete with band, buffet and cake!
              </p>
            </div>
            <a href="/images/ASU.jpg" target="_blank">
              <img
                src="/images/ASU.jpg"
                alt=""
                className="max-w-full lg:max-w-lg my-6 md:ml-10 border border-archiveYellow-600 rounded-md transform transition-transform rotate-3 hover:rotate-2"
              />
            </a>
          </div>

          <StarDivider />

          <div className="w-full py-4 md:px-12 flex flex-col-reverse md:flex-row justify-between items-center">
            <a
              href="https://www.ceciliansociety.co.uk/archive/gallery/h2S/h2s9_jpg"
              target="_blank"
            >
              <img
                src="https://www.ceciliansociety.co.uk/archive/gallery/h2S/h2s9.jpg"
                alt=""
                className="max-w-full lg:max-w-lg my-6 md:mr-10 border border-archiveYellow-600 rounded-md transform transition-transform -rotate-3 hover:-rotate-2"
              />
            </a>
            <div className="max-w-prose">
              <h3 className="text-gray-900 text-3xl text-right pt-4 pb-2">Saturday 22nd October</h3>
              <p className="text-right text-lg py-4">
                Day two will begin again with <b>daytime concert rehearsals</b>, culminating in our{" "}
                <b>evening concert</b> in{" "}
                <a
                  href="https://goo.gl/maps/Y3CTX9XzyLRvFAT88"
                  target="_blank"
                  className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
                >
                  Glasgow University Union
                </a>
                .
              </p>
            </div>
          </div>

          <StarDivider />

          <div className="w-full py-4 md:px-12 flex flex-col md:flex-row justify-between items-center">
            <div className="max-w-prose">
              <h3 className="text-gray-900 text-3xl text-left pt-4 pb-2">Sunday 23rd October</h3>
              <p className="text-left text-lg py-4">
                Our final day of celebrations will end with a <b>black tie dinner</b> at the{" "}
                <a
                  href="https://www.gghotel.co.uk/"
                  target="_blank"
                  className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
                >
                  Glasgow Grosvenor Hotel
                </a>
                , followed, of course, by an <b>Afters</b> (venue tbc!)
              </p>
            </div>
            <a
              href="https://www.ceciliansociety.co.uk/archive/gallery/40thAnniversaryDinner1992/7_jpg"
              target="_blank"
            >
              <img
                src="https://www.ceciliansociety.co.uk/archive/gallery/40thAnniversaryDinner1992/7.jpg"
                alt=""
                className="max-w-full lg:max-w-lg my-6 md:ml-10 border border-archiveYellow-600 rounded-md transform transition-transform rotate-3 hover:rotate-2"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-archiveBlue-50 p-8 px-2 flex flex-col items-center md:max-w-full md:justify-between">
        <div className="max-w-prose mx-4">
          <h2 className="text-gray-900 text-4xl text-center pt-4 pb-2">What now?</h2>
          <p className="text-center text-lg py-4">
            More details of each event, including timings, will be available on these pages soon, as
            will the ability to buy tickets to each event.
          </p>
          <p className="text-center text-lg py-4">
            What we really want to know right now is what you'd like to do in the Anniversary
            Concert! Head on over to the Concert page for full details.
          </p>
        </div>
        <ButtonLink to="/70th/concert" variant="solid" colour="secondary" className="mb-6">
          Concert Breakdown
        </ButtonLink>
      </section>
    </>
  );
};

Home70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Home70th;
