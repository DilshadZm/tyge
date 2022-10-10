import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "@progress/kendo-theme-default/dist/all.css";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { RiAddCircleLine } from "react-icons/ri";
import "../resource/style.css";
import Forms from "./formComponents/companies/company-forms";
import { Link } from "react-router-dom";

function Masters() {
  const [open, setOpen] = useState(false);

  const companies = [
    {
      Name: "Companies",
      Description: "May 4, 2022",
      Number: 213,
      link:"companies",
      logo:"company.png",
    },
    {
      Name: "Suppliers",
      Description: "May 4, 2022",
      Number: 713,
      link:"suppliers",
      logo:"supplier.png",
    },
    {
      Name: "Countries",
      Description: "May 4, 2022",
      Number: 73,
      link:"countries",
      logo:"country.png",
    },
    {
      Name: "Currencies",
      Description: "May 4, 2022",
      Number: 13,
      link:"currencies",
      logo:"Currency.png",
    },
    {
      Name: "Users",
      Description: "May 4, 2022",
      Number: 1213,
      link:"users",
      logo:"user.png",
    },
    {
      Name: "Projects",
      Description: "May 4, 2022",
      Number: 98,
      link:"projects",
      logo:"project.png",
    },
  ];
  return (
    <div>
      <div className="mx-auto flex lg:my-8 max-w-7xl sm:px-6 lg:px-0 flex-wrap">
        <h2 className="my-1 font-bold lg:text-2xl font-san sm:text-lg">
          Masters
        </h2>
        <div className=" items-center w-full max-w-lg mx-5 lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-md border border-transparent bg-gray-100 py-1 mt-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-600 focus:border-gray focus:bg-gray-200 focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Search Companies / Supplier"
              type="search"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="flex basis-1/2 my-1 justify-end">
          <div className="justify-items-end">
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                          <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                              <div className="flex items-start justify-between">
                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                  New Company
                                </Dialog.Title>
                                <div className="ml-3 flex h-7 items-center">
                                  <button
                                    type="button"
                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={() => setOpen(false)}
                                  >
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>

                            <Forms />
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>
        </div>
      </div>
      <div className="mx-auto flex py-16 flex-wrap max-w-7xl sm:px-6 lg:my-3 rounded-xl lg:px-10 shadow-[-1px_-1px_20px_1px_rgba(0,0,0,0.1),_1px_1px_20px_1px_rgba(45,78,255,0.15)]">
        {companies.map((item) => (
          <div className="w-1/3 pt-5 m-2 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 w-24 h-24 rounded-full shadow-lg"
                src={item.logo}
                alt="logo image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {item.Name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.Number}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Link
                  to={item.link}
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Masters;
