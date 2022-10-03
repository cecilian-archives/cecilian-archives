import type { NextPage } from "next";

import StarDivider from "src/components/StarDivider";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="flex flex-1 flex-col justify-start w-full min-h-screen bg-archiveBlue-50 py-8 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 border-y-8 border-t-archiveBlue-500 border-b-archiveYellow-500">
      <div className="max-w-prose mx-auto text-gray-800">
        <img
          src="/images/logo.svg"
          alt=""
          className="w-auto max-h-12 border border-archiveBlue-700 rounded-xl"
        />
        <h2 className="mt-6 text-3xl tracking-tight text-black">Privacy</h2>
        <p className="py-2">
          One of the Cecilian Society's priorities is the privacy of the people we work with. This
          Privacy Policy document outlines the types of information that are collected and recorded
          by the Cecilian Society and the Archive project (hereafter "The Cecilian Society"), and
          how we use it.
        </p>

        <p className="py-2">
          If you have additional questions or require more information about our Privacy Policy, do
          not hesitate to contact us by emailing{" "}
          <a className="underline hover:text-gray-600" href="mailto:support@cecilianarchives.com">
            support@cecilianarchives.com
          </a>
          .
        </p>

        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />

        <h3 className="mt-2 text-xl tracking-tight text-black">What to Expect</h3>
        <p className="py-2">
          The Cecilian Society follows a standard procedure of using log files. These files log
          visitors when they visit websites. All hosting companies do this as a part of hosting
          services' analytics. The information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the information is for
          analyzing trends, administering the site, tracking users' movement on the website, and
          gathering demographic information.
        </p>

        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />

        <h3 className="mt-2 text-xl tracking-tight text-black">Cookies and Web Beacons</h3>
        <p className="py-2">
          Like many other websites, The Cecilian Society uses 'cookies'. These cookies are used to
          store information including visitors' login state. The information is used to optimize the
          users' experience by customizing our web page content based on visitors' browser type
          and/or other information.
        </p>
        <p className="py-2">
          For more general information on cookies, please read the{" "}
          <a href="https://www.generateprivacypolicy.com/#cookies">
            "Cookies" article from the Privacy Policy Generator
          </a>
          .
        </p>

        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />

        <h3 className="mt-2 text-xl tracking-tight text-black">Third Party Privacy Policies</h3>
        <p className="py-2">
          The Cecilian Society's Privacy Policy does not apply to other advertisers or websites.
          Thus, we advise you to consult the respective Privacy Policies of these third-party
          servers for more detailed information. It may include their practices and instructions
          about how to opt-out of certain options.
        </p>
        <p className="py-2">
          You can choose to disable cookies through your individual browser options. To know more
          detailed information about cookie management with specific web browsers, it can be found
          at the browsers' respective websites.
        </p>

        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />

        <h3 className="mt-2 text-xl tracking-tight text-black">Children's Information</h3>
        <p className="py-2">
          Another part of our priority is adding protection for children while using the internet.
          We encourage parents and guardians to observe, participate in, and/or monitor and guide
          their children's online activity.
        </p>
        <p className="py-2">
          The Cecilian Society does not knowingly collect any Personal Identifiable Information from
          children under the age of 13. If you think that your child has provided this kind of
          information on our website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our records.
        </p>

        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />

        <h3 className="mt-2 text-xl tracking-tight text-black">Online Privacy Policy Only</h3>
        <p className="py-2">
          This Privacy Policy applies only to our online activities and is valid for visitors to our
          website with regards to the information that they share with and/or have collected by The
          Cecilian Society. This policy is not applicable to any information collected offline or
          via channels other than this website.
        </p>

        <StarDivider spacingClass="py-6" bgClass="bg-archiveBlue-50" />

        <h3 className="mt-2 text-xl tracking-tight text-black">Consent</h3>
        <p className="py-2">
          By using this website, you consent to our Privacy Policy and agree to its Terms and
          Conditions.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
