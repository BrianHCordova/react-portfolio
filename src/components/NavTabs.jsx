import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link component

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-zinc-800 shadow-md shadow-black items-center">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-56">
                    <Link to="/" className="rounded-md bg-gray-900 hover:bg-gray-700 px-3 py-2 text-xl font-medium text-white">
                      Home
                    </Link>
                    <Link to="/portfolio" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Portfolio
                    </Link>
                    <Link to="/about" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      About Me
                    </Link>
                    <Link to="/contact" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 sm:hidden">
                {/* Mobile menu button/Mobile menu */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
                Home
              </Link>
              <Link to="/portfolio" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Portfolio
              </Link>
              <Link to="/about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                About Me
              </Link>
              <Link to="/contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Contact Me
              </Link>
            </div>
            <div className=" pb-3 pt-4">
              <div className="flex items-center px-5"></div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
