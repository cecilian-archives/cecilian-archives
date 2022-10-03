import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BookOpenIcon,
  MagnifyingGlassIcon,
  BookmarkSquareIcon,
  ArrowUpTrayIcon,
  TicketIcon,
  CakeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const archiveMenuItems = [
  {
    name: "Browse",
    description: "Find archive items by their tags",
    href: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Search",
    description: "Enter keywords to match archive items",
    href: "#",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Collections",
    description: "View predefined lists of archive items",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Upload",
    description: "Add items to the archive",
    href: "#",
    icon: ArrowUpTrayIcon,
  },
];

const otherMenuItems = [
  {
    name: "70th Info",
    description: "Details of the anniversary celebrations",
    href: "/70th",
    icon: CakeIcon,
  },
  {
    name: "Ticket Orders",
    description: "Your purchased tickets",
    href: "/dash/orders",
    icon: TicketIcon,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Popover as="header" className="relative bg-archiveBlue-500 w-full">
      <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true" />
      <div className="relative z-20 w-full">
        <div className="mx-auto flex w-full items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8 border-b-8 border-archiveYellow-500">
          <div>
            <a href="/dash" className="flex">
              <span className="sr-only">Cecilian Archives</span>
              <img
                src="/images/logo.svg"
                alt=""
                className="w-12 max-h-12 border border-archiveBlue-800 rounded-xl"
              />
            </a>
          </div>
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-lg bg-archiveBlue-500 bg-opacity-80 p-1 hover:bg-archiveBlue-400 border border-archiveBlue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-archiveYellow-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-8 h-8 text-archiveBlue-100" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-50" : "text-gray-100",
                        "group inline-flex items-center rounded-md bg-archiveBlue-500 text-base font-title hover:text-archiveYellow-500 focus:outline-none focus:ring-2 focus:ring-archiveYellow-500 focus:ring-offset-4 focus:ring-offset-archiveBlue-500"
                      )}
                    >
                      <span>Archive</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-50" : "text-gray-100",
                          "ml-2 h-5 w-5 group-hover:text-archiveYellow-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                        <div className="relative mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {archiveMenuItems.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-archiveBlue-500 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-lg font-title text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-archiveBlue-600 lg:mt-4">
                                    Go now
                                    <span aria-hidden="true"> &rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          ))}
                          <div className="absolute inset-0 bg-white bg-opacity-90 flex justify-center items-center">
                            <span className="font-title text-4xl text-gray-400">Coming Soon</span>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {otherMenuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-title text-gray-100 hover:text-archiveYellow-500"
                >
                  {item.name}
                </a>
              ))}
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white border border-archiveYellow-500 shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    src="/images/logo.svg"
                    alt="Cecilian Archives logo"
                    className="w-10 max-h-10 border border-archiveBlue-800 rounded-md"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-archiveYellow-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-8 h-8 text-gray-500" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {archiveMenuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(event) => {
                          event.preventDefault();
                          alert("Coming Soon!");
                          return false;
                        }}
                        className="relative -m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-archiveBlue-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-title text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center"></div>
                      </a>
                    ))}
                    {otherMenuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-archiveBlue-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-lg font-title text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
