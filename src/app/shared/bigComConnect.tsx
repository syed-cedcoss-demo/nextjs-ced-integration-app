"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type props = {
  isOpen: boolean;
  setIsOpen: any;
};
const BigComConnect = ({ isOpen, setIsOpen }: props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(!isOpen)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  BigCommerce Connect
                  <button
                    type="button"
                    className="absolute right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                    data-modal-hide="authentication-modal"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <div>
                    <input
                      type="text"
                      name="shipId"
                      id="shipId"
                      className="bg-gray-50 border mt-6 border-gray-200 text-sm rounded-sm focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 "
                      placeholder="Enter Shop Id"
                      required
                    />
                    <input
                      type="text"
                      name="accessToken"
                      id="accessToken"
                      className="bg-gray-50 border mt-6 border-gray-200 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter Access Token"
                      required
                    />
                    <input
                      type="text"
                      name="clientId"
                      id="clientId"
                      className="bg-gray-50 border mt-6 border-gray-200 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter Client Id"
                      required
                    />
                    <input
                      type="text"
                      name="clientSecret"
                      id="clientSecret"
                      className="bg-gray-50 border mt-6 border-gray-200 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Enter Client Secret"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    // onClick={() => setIsOpen(!isOpen)}
                  >
                    Connect
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BigComConnect;
