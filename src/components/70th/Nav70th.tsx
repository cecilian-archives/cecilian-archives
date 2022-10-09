import type { ReactElement } from "react";
import { useState, forwardRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "src/utils/classNames";

const navItems = [
  { href: "/70th", name: "Events" },
  { href: "/70th/concert", name: "Concert" },
  { href: "/70th/tickets", name: "Tickets" },
  { href: "/70th/attendees", name: "Attendees" },
  { href: "/70th/contact", name: "Get In Touch" },
];

type FadingDivProps = {
  children?: ReactElement;
};
const FadingDiv = forwardRef(({ children }: FadingDivProps, ref) => (
  <motion.div
    key="70thMobileNav"
    ref={ref as any}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
));

const Nav70th = () => {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <nav className="hidden md:block w-full py-4 px-6 bg-archiveBlue-500 text-archiveYellow-400">
        <ul className="flex flex-row gap-6 lg:gap-16 justify-center items-center">
          {navItems.map((item) => {
            const isActive = router.asPath === item.href;
            const activeClasses = "border-b border-archiveYellow-500";
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <a
                    className={classNames(
                      "block py-2 hover:border-b hover:border-archiveYellow-500 hover:text-archiveYellow-500",
                      isActive && activeClasses
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        onClick={() => setMobileNavOpen(true)}
        className="fixed top-5 left-5 bg-archiveBlue-500 bg-opacity-80 z-10 border border-gray-200 rounded-md p-1 md:hidden"
      >
        <Bars3Icon className="w-8 h-8 text-gray-200" />
      </button>
      <AnimatePresence>
        <Dialog as={FadingDiv} open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
          <nav className="fixed inset-0 py-4 px-6 bg-archiveBlue-500 z-20 text-archiveYellow-400">
            <ul className="w-full h-full flex flex-col gap-4 justify-center items-center">
              <img
                src="/images/70thLogo.png"
                alt=""
                className="w-auto max-h-28 -mt-8 mb-8 border border-archiveBlue-600 rounded-lg"
              />
              {navItems.map((item) => {
                const isActive = router.asPath === item.href;
                const activeClasses = "border-b border-archiveYellow-500";
                return (
                  <li key={item.href} className={classNames("py-2", isActive && activeClasses)}>
                    <Link href={item.href}>
                      <a onClick={() => setMobileNavOpen(false)}>{item.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            onClick={() => setMobileNavOpen(false)}
            className="fixed top-5 right-5 z-20 border border-gray-200 rounded-full p-1"
          >
            <XMarkIcon className="w-8 h-8 text-gray-200" />
          </button>
        </Dialog>
      </AnimatePresence>
    </>
  );
};

export default Nav70th;
