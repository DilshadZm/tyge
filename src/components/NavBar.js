import React, { useContext } from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../AppContext";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SiRos } from "react-icons/si";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { MdFactCheck, MdOutlinePeopleAlt } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { BiBarChartSquare } from "react-icons/bi";
import { BsFileText } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";

export default function Layout({ children }) {
  const authCtx = useContext(AppContext);
  const onLogoutClick = () => {
    authCtx.logout();
  };

  return (
    <div className="p-0">
      <Disclosure
        as="nav"
        className="bg-gradient-to-r from-red-500 to-violet-900"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center px-2 lg:px-0">
                  <Menu as="div" className="relative inline-block text-left">
                    <div className="flex-shrink-0">
                      <Menu.Button className="inline-flex w-full justify-center ">
                        <SiRos
                          className="-mr-1 ml-2 h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute p-2 right--10 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-0">
                          <div className="rounded mx-4 my-2 hover:bg-blue-100 hover:text-blue-600">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/dashboard"
                                  className={
                                    (active
                                      ? "bg-blue-300 text-blue-600"
                                      : "text-gray-700",
                                    "group flex items-center text-sm ")
                                  }
                                >
                                  <TbLayoutDashboard
                                    className="mr-3 h-8 w-8 p-1 rounded bg-blue-600 text-white"
                                    aria-hidden="true"
                                  />
                                  Dashboard
                                </NavLink>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="rounded mx-4 my-2 hover:bg-orange-100 hover:text-orange-600">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/invoices"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "group flex items-center text-sm")
                                  }
                                >
                                  <BsFileText
                                    className="mr-3 h-8 w-8 p-1 rounded bg-orange-200 text-orange-600 "
                                    aria-hidden="true"
                                  />
                                  Invoices
                                </NavLink>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="rounded mx-4 my-2 hover:bg-red-100 hover:text-red-500">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/masters"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "group flex items-center text-sm")
                                  }
                                >
                                  <BiBarChartSquare
                                    className="mr-3 h-8 w-8 p-1 rounded bg-red-200 text-red-500"
                                    aria-hidden="true"
                                  />
                                  Masters
                                </NavLink>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="rounded mx-4 my-2 hover:bg-pink-100 hover:text-pink-400">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/bookmarks"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "group flex items-center  text-sm")
                                  }
                                >
                                  <FiBookmark
                                    className="mr-3 h-8 w-8 p-1 rounded bg-pink-200 text-pink-400 "
                                    aria-hidden="true"
                                  />
                                  Bookmarks
                                </NavLink>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="rounded mx-4 my-2 hover:bg-green-100 hover:text-green-500">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/contracts"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "group flex items-center text-sm")
                                  }
                                >
                                  <MdFactCheck
                                    className="mr-3 h-8 w-8 p-1 rounded bg-green-200 text-green-500 "
                                    aria-hidden="true"
                                  />
                                  Contracts
                                </NavLink>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="rounded mx-4 my-2 hover:bg-blue-100">
                            <Menu.Item>
                              {({ active }) => (
                                <NavLink
                                  to="/people"
                                  className={
                                    (active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "group flex items-center text-sm")
                                  }
                                >
                                  <MdOutlinePeopleAlt
                                    className="mr-3 h-8 w-8 p-1 rounded bg-violet-300 text-violet-600 "
                                    aria-hidden="true"
                                  />
                                  People
                                </NavLink>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <MdFactCheck className="-mr-1 ml-5 h-11 w-11 text-yellow-400" />
                  <div className="hidden lg:ml-1 lg:block">
                    <div className="flex space-x-4 max-w-xs">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                      <a
                        href="#"
                        className="rounded-md px-3 py-2 text-s font-medium text-white"
                      >
                        Supplier Invoice <br />
                        Management System
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center px-2 lg:px-0 max-w-56 basis-5/12">
                  <div className="flex-shrink-0 text-white text-xl font-bold">
                    tyge
                  </div>
                </div>
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>

                    <div className="relative w-56">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-transparent bg-gray-100 py-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-600 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:ml-4 lg:block">
                  <div className="flex items-center">
                    {/* <div className="flex justify-end">
                    <form action="" class="relative mx-auto ">
                      <input
                        type="search"
                        class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border-2 bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white-300 focus:pl-16 focus:pr-4"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-100 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </form>
                    </div> */}
                    <button
                      type="button"
                      className="flex-shrink-0 rounded-full  p-1 text-gray-100 mx-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <AiOutlineExclamationCircle
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="flex-shrink-0 rounded-full  p-1 text-gray-100 mx-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <a
                            href="#"
                            className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900"
                          >
                            Pradeep
                          </a>
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={
                                  (active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700")
                                }
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={
                                  (active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700")
                                }
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={
                                  (active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700")
                                }
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </Disclosure.Button>
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      Pradeep
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    onClick={onLogoutClick}
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {children}
    </div>
  );
}
