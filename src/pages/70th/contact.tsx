import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";

import Layout70th from "src/components/70th/Layout70th";
import { motion } from "framer-motion";
import ButtonLink from "src/components/ButtonLink";

const Contact70th: NextPageWithLayout = () => {
  return (
    <motion.section
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.7, delay: 0.9 }}
      className="w-full bg-archiveBlue-50 p-10 flex flex-col items-center md:py-8 md:max-w-full md:justify-between"
    >
      <div className="max-w-prose mx-4">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Contact the Team</h2>
        <p className="text-lg py-4">
          To get in touch with the 70th Anniversary team, you can email{" "}
          <a
            href="mailto:70th@ceciliansociety.co.uk"
            target="_blank"
            className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
          >
            70th@ceciliansociety.co.uk
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
    </motion.section>
  );
};

Contact70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Contact70th;
