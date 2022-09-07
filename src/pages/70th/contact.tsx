import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import ButtonLink from "src/components/ButtonLink";

const Contact70th: NextPageWithLayout = () => {
  return (
    <section className="w-full bg-archiveBlue-50 p-8 px-4 flex flex-col items-center md:max-w-full md:justify-between">
      <div className="w-full max-w-prose mx-auto">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Contact the Team</h2>
        <p className="text-lg py-4">
          To get in touch with the 70th Anniversary team, you can email{" "}
          <a
            href="mailto:70th@cecilianarchives.com"
            target="_blank"
            className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
          >
            70th@cecilianarchives.com
          </a>{" "}
          and one of us will get back to you ASAP.
        </p>
        <p className="text-lg py-4">
          Information and questions can also be posted in the Facebook group set up for Cecilian
          alumni. If you're not yet a member, please feel free to join!
        </p>
        <ButtonLink
          to="https://www.facebook.com/groups/484446048403644"
          target="_blank"
          variant="solid"
          colour="primary"
        >
          Alumni Facebook Group
        </ButtonLink>
      </div>
      <a
        href="https://www.ceciliansociety.co.uk/archive/gallery/merrywidow1968/PICT0014_JPG"
        target="_blank"
      >
        <img
          src="https://www.ceciliansociety.co.uk/archive/gallery/merrywidow1968/PICT0014.JPG"
          alt=""
          className="max-w-full lg:max-w-lg mt-10 mb-6 border border-archiveYellow-600 rounded-md transform transition-transform -rotate-3 hover:-rotate-2"
        />
      </a>
    </section>
  );
};

Contact70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Contact70th;
