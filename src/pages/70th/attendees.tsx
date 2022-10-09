import type { ReactElement } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import Layout70th from "src/components/70th/Layout70th";

import { useEffect } from "react";
import { useRouter } from "next/router";
import ButtonLink from "src/components/ButtonLink";
import StarDivider from "src/components/StarDivider";
import LoadingIndicator from "src/components/LoadingIndicator";
import { trpc } from "src/utils/trpc";

const Attendees70th: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/70th/tickets");
  }, []);

  const attendees = trpc.salesOrders.getAllAttendeeNames.useQuery();

  return (
    <section className="w-full bg-archiveBlue-50 p-8 flex flex-col items-center md:max-w-full md:justify-between">
      <div className="w-full max-w-prose mx-auto">
        <h2 className="text-gray-900 text-4xl pt-4 pb-2">Attendees</h2>
        <p className="py-4 text-lg">
          Below is a list of those who have confirmed their attendance at one or more of the 70th
          anniversary events. If your name isn't there yet, join us!
        </p>
        <ButtonLink to="/70th/tickets" variant="solid" colour="secondary" className="mx-auto">
          Ticket Details
        </ButtonLink>

        <StarDivider spacingClass="py-4" bgClass="bg-archiveBlue-50" />

        {!attendees.isFetched ? (
          <div className="flex justify-center items-center gap-4">
            <LoadingIndicator />
            <p className="text-lg font-title">Loading list...</p>
          </div>
        ) : (
          <ul className="list-disc px-6 md:px-10 py-4 text-lg">
            {attendees?.data?.map((attendee) => (
              <li key={attendee?.id}>
                {attendee?.firstNames} {attendee?.lastNames}{" "}
                {attendee?.otherNames ? `(${attendee.otherNames})` : ""}{" "}
                {attendee?.plus ? (attendee.plus !== 0 ? `[+${attendee.plus}]` : "") : ""}
              </li>
            ))}
          </ul>
        )}

        <StarDivider spacingClass="py-4" bgClass="bg-archiveBlue-50" />
      </div>
      <a href="/images/Pippin.jpg" target="_blank">
        <img
          src="/images/Pippin.jpg"
          alt=""
          className="max-w-full lg:max-w-lg my-8 border border-archiveYellow-600 rounded-md transform transition-transform -rotate-3 hover:-rotate-2"
        />
      </a>
    </section>
  );
};

Attendees70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Attendees70th;
