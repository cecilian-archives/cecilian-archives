import type { ReactElement, SetStateAction } from "react";
import type { NextPageWithLayout } from "src/pages/_app";
import { useState } from "react";
import Layout70th from "src/components/70th/Layout70th";

import { Disclosure, Transition } from "@headlessui/react";
import StarDivider from "src/components/StarDivider";
import ButtonLink from "src/components/ButtonLink";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type AccordionPanelProps = {
  title: string;
  children: ReactElement | ReactElement[];
  openPanel: string;
  setOpenPanel: SetStateAction<any>;
};

const AccordionPanel = ({ title, children, openPanel, setOpenPanel }: AccordionPanelProps) => {
  const handleClick = () =>
    setOpenPanel((current: string) => {
      const isOpen = current === title;
      if (isOpen) return "";
      return title;
    });

  const isOpen = openPanel === title;

  return (
    <Disclosure>
      <Disclosure.Button
        onClick={handleClick}
        className="w-full py-4 -mx-1 md:mx-0 flex flex-row items-center justify-start gap-4"
      >
        <ChevronRightIcon
          className={`w-4 h-4 flex-shrink-0 transition-transform ${
            isOpen ? "transform rotate-90" : ""
          }`}
        />
        <span className="font-title text-left text-gray-900 text-2xl">{title}</span>
      </Disclosure.Button>
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="transform translate-y-4 opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform translate-y-4 opacity-100"
        leaveTo="transform translate-y-4 opacity-0"
      >
        <Disclosure.Panel static={true}>{children}</Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

const Concert70th: NextPageWithLayout = () => {
  const [openPanel, setOpenPanel] = useState("");
  return (
    <>
      <section className="w-full bg-archiveBlue-50 p-8 px-4 flex flex-col items-center md:max-w-full md:justify-between">
        <div className="max-w-prose mx-4">
          <h2 className="text-gray-900 text-4xl pt-4 pb-2">Concert Breakdown</h2>
          <p className="text-lg py-4">
            We are so excited to get started on the 70th Celebration Concert, and we've reached the
            point where we need <b>your</b> help! The provisional setlist for the Concert is now
            available to view and enjoy.
          </p>
          <div className="py-2 sm:py-0 flex flex-col sm:flex-row items-center gap-4">
            <ButtonLink to="/70th/concert/setlist" variant="solid" colour="primary">
              Concert Setlist
            </ButtonLink>
            <ButtonLink
              to="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
              target="_blank"
              variant="solid"
              colour="secondary"
            >
              Concert Interest Form
            </ButtonLink>
          </div>
          <p className="text-lg py-4">
            We have also set up a form to gather info on what people would be interested in doing as
            part of the concert. Please see more info on this below, and fill in{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
              target="_blank"
              className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
            >
              the form
            </a>{" "}
            ASAP if you would like to take part!
          </p>
        </div>
      </section>

      <section className="w-full bg-archiveYellow-50 p-8 px-4 flex flex-col items-center md:max-w-full md:justify-between">
        <div className="max-w-prose mx-4">
          <h3 className="text-gray-900 text-3xl pt-4 pb-2">What's Happening?</h3>
          <p className="text-lg py-4">
            The{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
              target="_blank"
              className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
            >
              Concert Interest Form
            </a>{" "}
            will let us know that you are planning to come and participate in the Concert.
            Rehearsals will be held mostly in person over the weekend, but there will be some
            sessions over Zoom to rehearse solos and small parts. All music will be distributed in
            the weeks prior to the Concert, so we can focus on putting the show together on the
            weekend.
          </p>
          <p className="text-lg py-4">
            Rehearsals will be held in person during the day on the Saturday, rehearsing different
            numbers all day, culminating in a walkthrough and tech run at approx. 4pm, going on to
            the Concert starting at 7.30pm. (There will be a break!) There will also be some
            rehearsals during the day on Friday for those who can accommodate.
          </p>
        </div>
      </section>

      <section className="w-full bg-archiveBlue-50 p-8 px-4 flex flex-col items-center md:max-w-full md:justify-between">
        <div className="max-w-prose mx-4">
          <h3 className="text-gray-900 text-3xl pt-4 pb-2">Who Do We Need?</h3>
          <p className="text-lg py-4">
            We need you! In addition to performers, concert director Izzy Way and the 70th
            anniversary team are also looking for people to help with other aspects of the Concert:
          </p>

          <AccordionPanel
            title="Production Team and Featured Performers"
            openPanel={openPanel}
            setOpenPanel={setOpenPanel}
          >
            <p className="text-lg py-4">
              If you were Production Team or Performed (Solos/Duets/Featured Parts) any of these
              numbers, please fill in{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
                target="_blank"
                className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
              >
                the form
              </a>{" "}
              to let us know if you'd like to reprise your role.
            </p>
            <p className="text-lg py-4">
              We are looking to get as many of the original people involved in these brilliant
              numbers back together as possible to create their own authentic versions for the
              Concert. If you are too busy to come back, which is absolutely fine(!), please let us
              know as well, and we will find someone to cover your part.
            </p>
            <p className="text-lg py-4">
              To get more info on what we are looking for from Production Teams, please contact Izzy
              - via{" "}
              <a
                href="mailto:70th@cecilianarchives.com"
                target="_blank"
                className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
              >
                70th@cecilianarchives.com
              </a>
              , or via Facebook - who will give you a bigger breakdown of the Concert as a whole.
            </p>
          </AccordionPanel>

          <StarDivider bgClass="bg-archiveBlue-50" />

          <AccordionPanel title="Tech Team" openPanel={openPanel} setOpenPanel={setOpenPanel}>
            <p className="text-lg py-4">
              We need an amazing group of Alumni techies to help out our sub committee with the
              stage dressing of the concert, and the decor of the room for both the Concert and the
              Dinner! If you have fond memories of painting bits of wood and making papier-mache in
              a UoG basement, let us know via{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
                target="_blank"
                className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
              >
                the form
              </a>{" "}
              and there will be more information very shortly.
            </p>
            <p className="text-lg py-4">
              Unfortunately we do not have the capacity to accommodate any help with our lighting or
              sound systems, as these are being sorted well in advance, and time will be very short
              on the weekend! If you have any questions about this - or suggestions - feel free to
              pop it in the box at the bottom of{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
                target="_blank"
                className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
              >
                the form
              </a>
              , and Izzy will get back to you shortly.
            </p>
          </AccordionPanel>

          <StarDivider bgClass="bg-archiveBlue-50" />

          <AccordionPanel title="Musicians" openPanel={openPanel} setOpenPanel={setOpenPanel}>
            <p className="text-lg py-4">
              We are still figuring out how best to score our concert. If you would love to be
              involved in an All-Star Cecilian Band to accompany the performers, the opportunity may
              arise!
            </p>
            <p className="text-lg py-4">
              If we have enough interest in people wanting to be in a Concert Band, this will go
              ahead, and more details will go out shortly. All we need from you now via{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
                target="_blank"
                className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
              >
                the form
              </a>{" "}
              is your interest, and what instrument you'd bring to the table.
            </p>
          </AccordionPanel>

          <StarDivider bgClass="bg-archiveBlue-50" />

          <AccordionPanel title="Hosts" openPanel={openPanel} setOpenPanel={setOpenPanel}>
            <p className="text-lg py-4">
              We will need Hosts for our Concert! If you hosted a Cabaret or two in your time in
              Cecilians, or have had a successful MC career since then (I know some of you have!),
              and fancy hosting our Concert, please let us know via{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
                target="_blank"
                className="underline text-archiveBlue-600 hover:text-archiveBlue-400"
              >
                the form
              </a>
              . We'd love to know a wee bit about your experience - or why you're wanting to host.
            </p>
            <p className="text-lg py-4">
              This role will consist of (minimal!) working with Izzy and the Concert team in the
              couple weeks leading up to the weekend to finalise any script and working within our
              tech and parameters of the concert.
            </p>
          </AccordionPanel>
        </div>
      </section>

      <section className="w-full bg-archiveYellow-50 p-8 px-4 flex flex-col items-center md:max-w-full md:justify-between">
        <h3 className="text-gray-900 text-3xl text-center pt-4 pb-2">Concert Interest Form</h3>
        <p className="text-lg text-center py-4 max-w-prose">
          If you've read this far, hopefully it's clear by now that no matter what you're interested
          in doing at the Concert, we'd like you to fill in the form!
        </p>
        <ButtonLink
          to="https://docs.google.com/forms/d/e/1FAIpQLScr6o1acCNZpRuV1nQCNQLsFTVbvEwz8CaqwjE3CwGj590e1w/viewform"
          target="_blank"
          variant="solid"
          colour="secondary"
        >
          Fill in the Form
        </ButtonLink>
      </section>
    </>
  );
};

Concert70th.getLayout = (page: ReactElement) => {
  return <Layout70th>{page}</Layout70th>;
};

export default Concert70th;
